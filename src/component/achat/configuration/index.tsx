
import { CircularProgress } from "@mui/material"
import { getConfig } from "@testing-library/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router-dom"
import axiosInstance from "../../../axiosConfig"
import { Istate } from "../../../store"
import configuration, { configActions } from "../../../store/configuration"
import { homeActions } from "../../../store/home"
import { baseConfig, config, priceParams, Segment } from "../../../type"
import useQuery from "../../customHooks/Routes/useQuery"
import ConfigurationOptions from "./options"
import ConfigurationStepper from "./stepper"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import axios from "axios"


let isInitial = true
const ConfigurationIndex = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [choose, setChoose] = useState("");
    let history = useHistory();
    const [InitialSegmentId, setInitialSegmentId] = useState<boolean>(true)
    const dispatch = useDispatch();
    const totalPrice = useSelector((state: Istate) => state.configuration.totalPrice)
    const loadPrice = useSelector((state: Istate) => state.configuration.loadPrice)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)
    const currentSegmentH = useSelector((state: Istate) => state.home.currentSegment)
    const currentSegmentId = useSelector((state: Istate) => state.configuration.currentSegmentId)
    const fromHome = useSelector((state: Istate) => state.configuration.fromHome)
    const isAuthenticated = useSelector((state: Istate) => state.auth.isAuthenticated)
    const unitPrice = useSelector((state: Istate) => state.configuration.unitPrice)
    const currency = useSelector((state: Istate) => state.header.currency)

    let query = useQuery();
    const segmentId = query.get('segmentId')
    useEffect(() => {
        dispatch(configActions.setCurrentStep("configuration"))
        dispatch(configActions.setForme(false))
        dispatch(configActions.setForAnother(false))
        dispatch(configActions.setLoadPrice(true))
        if (localStorage.getItem("comingFromHome") == "in") {
            localStorage.removeItem("in confirmation")
            localStorage.removeItem("comingFromHome")
            setOpenDialog(true)
        }
        isInitial = true
        const getConfig = async () => {
            await axiosInstance.get("public/segment/getAll")
                .then(async (res) => {
                    //dispatch(homeActions.setSegmants(res.data.content))

                    if (fromHome) {
                        dispatch(configActions.setFromHome(false))
                        const segmentId = currentSegmentH.segmentId
                        const configId = currentSegmentH.configId
                        await Promise.all([
                            axiosInstance.get<baseConfig[]>(`public/api/config/baseConfig?configId=${configId}`),
                            axiosInstance.get(`public/api/config/passDelay?configId=${configId}`),
                            axiosInstance.get(`public/api/config/dayToDeparture?configId=${configId}`),
                        ]).then((res) => {
                            dispatch(configActions.setBaseConfigList(res[0].data))
                            dispatch(configActions.setDelayList(res[1].data))
                            dispatch(configActions.setDayToDepartureList(res[2].data))
                            dispatch(configActions.setCurrentSegment(segmentId))
                            dispatch(configActions.setCurrentConfigId(configId))

                        })
                    } else {
                    }
                })
        }
        getConfig()
        return () => {
            // Side-effect cleanup
        };
    }, [])

    useEffect(() => {
        setInitialSegmentId(true)
        const update = async () => {
            dispatch(configActions.setLoadPrice(true))
            const segmentId = currentSegmentH.segmentId
            const configId = currentSegmentH.configId
            await Promise.all([
                axiosInstance.get<baseConfig[]>(`public/api/config/baseConfig?configId=${configId}`),
                axiosInstance.get(`public/api/config/passDelay?configId=${configId}`),
                axiosInstance.get(`public/api/config/dayToDeparture?configId=${configId}`),
                axiosInstance.get(`public/fp-dailyOffer/defaultConfig/${segmentId}/${currency}`)
            ]).then((res) => {
                dispatch(configActions.setBaseConfigList(res[0].data))
                dispatch(configActions.setDelayList(res[1].data))
                dispatch(configActions.setDayToDepartureList(res[2].data))
                const Configuration: config = {
                    nbrFlights: res[3].data.baseConfig.nbrFlights,
                    percentageNbrFlights: res[3].data.baseConfig.percentage,

                    dayToDeparture: res[3].data.dayToDeparture.nbrDays,
                    percentageDayToTravel: res[3].data.dayToDeparture.percentage,

                    delay: res[3].data.passDelay.nbrMonths,
                    percentagePassDelay: res[3].data.passDelay.percentage,

                }
                dispatch(configActions.setCurrentAllConfig(Configuration))
                dispatch(configActions.setCurrentPrice(res[3].data.flightpassPrice))
                dispatch(configActions.setCurrentConfigId(configId))
                setTimeout(() => {
                    dispatch(configActions.setLoadPrice(false))
                }, 1000)

            })
        }
        update();

    }, [currentSegmentId])

    useEffect(() => {
        if (isInitial) {
            isInitial = false
            return;
        }
        if (InitialSegmentId) {
            setInitialSegmentId(false)
            return
        }

        dispatch(configActions.setLoadPrice(true))
        const priceParams: priceParams = {
            currencyCode: currency,
            date: "2022-03-01",
            nbrFlights: currentConfig.nbrFlights,
            percentageNbrFlights: currentConfig.percentageNbrFlights,
            percentageDayToTravel: currentConfig.percentageDayToTravel,
            percentagePassDelay: currentConfig.percentagePassDelay,
            segmentId: currentSegmentId
        }
        axiosInstance.post("public/flightpass/flightpass-price", priceParams)
            .then((res) => {
                dispatch(configActions.setCurrentPrice(res.data.flightpassPrice))
                setTimeout(() => {
                    dispatch(configActions.setLoadPrice(false))
                }, 3000)

            })
            .catch(() => {

            })
    }, [currentConfig, currency])






    const saveConfig = async () => {
        const config = {
            currency: currency,
            segmentId: currentSegmentId,
            deviceId: "idr125",
            fpCalculatedFinalPrice: totalPrice,
            baseConfig: currentConfig.nbrFlights,
            dayToTravel: currentConfig.dayToDeparture,
            passDelay: currentConfig.delay
        }
        await axiosInstance
            .post("public/flightpass-order/create", config)
            .then(() => {
                setOpenDialog(true)
            })
            .catch((err) => {
                setOpenDialog(true)
            })

    }
    const forMe = () => {
        dispatch(configActions.setForme(true))
        history.push("/configuration?step=confirmation");
    }

    const forAnother = () => {
        dispatch(configActions.setForAnother(true))
        history.push("/configuration?step=confirmation");
    }
    const signIn = () => {
        localStorage.setItem('in confirmation', "in")
        let port = window.location.port ? ':' + window.location.port : '';
        window.location.href = '//' + window.location.hostname + port + '/private';

    }
    const SignUp = () => {
        localStorage.setItem('in confirmation', "in")
        let port = window.location.port ? ':' + window.location.port : '';
        window.location.href = '//' + window.location.hostname + port + '/private';

    }

    return (
        <div className="configuration">
            <div className="">
                <Dialog
                    open={openDialog}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <div className="configuration-dialog">
                        {isAuthenticated ? (
                            <div>
                                <DialogTitle id="alert-dialog-title">
                                    Voulez-vous l’acheter pour vous ou pour
                                    une autre personne?
                                </DialogTitle>
                                <DialogActions>
                                    <button className="forMe" onClick={forMe}>Pour vous</button>
                                    <button className="forAnother" onClick={forAnother} >
                                        Pour une autre personne
                                    </button>
                                </DialogActions>
                            </div>

                        ) :
                            <div>
                                <DialogTitle id="alert-dialog-title">
                                    <h3>Connexion</h3>
                                </DialogTitle>
                                <div className="d-flex flex-column align-items-center">
                                    <button className="auth signIn mb-5" onClick={signIn}>Se connecter</button>
                                    <button className="auth signUp" onClick={SignUp} >
                                        Créer un nouveau compte
                                    </button>

                                </div>
                            </div>
                        }
                    </div>
                </Dialog>
            </div>

            <ConfigurationOptions />
            <div className="price">
                <div className="price-container">
                    <div className="total">
                        {loadPrice ?
                            < div className="circularProgress" >
                                <CircularProgress style={{ 'color': '#C82345' }} />
                            </div >
                            :
                            null
                        }
                        <div className={loadPrice ? "hidden" : ""}>
                            {totalPrice | 1}
                            <span>{currency}</span>
                            <div className="unitPrice">
                                {unitPrice | 1}{currency}/Vol
                            </div>
                            <p>(Taxes include et surcharges)</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="actions">
                <button className="validate" onClick={saveConfig}>
                    Valider
                </button>
            </div>
        </div>
    )
}
export default ConfigurationIndex