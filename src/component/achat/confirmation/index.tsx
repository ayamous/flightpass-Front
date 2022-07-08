import { CircularProgress } from "@mui/material";
import { useEffect, useState, MouseEvent, ChangeEvent } from "react";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axiosInstance from "../../../axiosConfig";
import { Istate } from "../../../store";
import { configActions } from "../../../store/configuration";
import { headerhActions } from "../../../store/header";
import { config, Segment } from "../../../type";
import CustSelect from "../home/segmentDescription/select";

const ConfirmationIndex = () => {
    const forMe = useSelector((state: Istate) => state.configuration.forMe)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const forAnother = useSelector((state: Istate) => state.configuration.forAnother)
    const [lastName, setLastName] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [adress, setAdress] = useState<{ adress: string, city: string, country: string, mobile: string }>()
    const [userRecap, setRecap] = useState<{ baseConfig: number, dayToTravel: number, passDelay: number, currency: string, total: number ,airportDeparture:string ,airportArrival:string  }>()

    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        console.log(forMe, forAnother)
        const getUserInfo = async () => {
            dispatch(configActions.setCurrentStep("confirmation"))
            localStorage.removeItem("in confirmation")
            console.log('for me',forMe,forAnother)
            /*if (!forMe && !forAnother) {
                history.push({
                    pathname: "/configuration"
                })
            }*/
            const [userInfo, recap] = await Promise.all([
                axiosInstance.get(`/public/user/user-infos`),
                axiosInstance.get(`/business/flightpass-order/get/idr125`)
            ])
            setEmail(userInfo.data.email);
            setLastName(userInfo.data.lastName)
            setFirstName(userInfo.data.firstName)
            setPhone(userInfo.data.mobile)
            setAdress({
                adress: userInfo.data.address,
                city: userInfo.data.city,
                country: userInfo.data.country,
                mobile: userInfo.data.mobile
            })

            setRecap({
                baseConfig: recap.data.baseConfig,
                dayToTravel: recap.data.dayToTravel,
                passDelay: recap.data.passDelay,
                total: recap.data.fpCalculatedFinalPrice,
                currency: recap.data.currency,
                airportArrival:recap.data.airportArrival,
                airportDeparture:recap.data.airportDeparture

            })
            dispatch(headerhActions.serCurreny(recap.data.currency))
        }
        getUserInfo();

    }, [])
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
    }
    const handleChangeFName = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.currentTarget.value);
    }
    const handleChangeLName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.currentTarget.value);
    }
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.currentTarget.value);
    }
    const save = () => {
        console.log(firstName, lastName, email, phone)
        const passenger = {
            firstName,
            lastName,
            email,
            mobileNumber:phone
        }
        axiosInstance.post("/business/flightpass-order/create/idr125",passenger)
    }
    const cancel = () => {
        history.push("/configuration")
    }


    return (
        <div className="row">
            <div className="formContact col-12 col-lg-7 ">
                <h3>Votre Flightpass </h3>
                <form className="">
                    <h6>Coordonnées du Passager</h6>
                    {forAnother ?
                        <span className="warning">* Merci d’enregistrer les informations du nouveau voyageur</span>
                        : null}
                    <div className="field">
                        <label htmlFor="nom">Nom {forAnother ? <span>*</span> : null}</label>
                        {forAnother ?
                            <i><img src="./assets/images/edit.svg" alt="" /></i>
                            :
                            null
                        }
                        <input id="nom" value={lastName} onChange={handleChangeLName} disabled={forMe} />
                    </div>
                    <div className="field">
                        <label htmlFor="nom">Prenom{forAnother ? <span>*</span> : null}</label>
                        {forAnother ?
                            <i><img src="./assets/images/edit.svg" alt="" /></i>
                            :
                            null
                        }
                        <input id="nom" value={firstName} onChange={handleChangeFName} disabled={forMe} />
                    </div>

                    <div className="field">
                        <label htmlFor="nom">E-mail{forAnother ? <span>*</span> : null}</label>
                        {forAnother ?
                            <i><img src="./assets/images/edit.svg" alt="" /></i>
                            :
                            null
                        }
                        <input id="nom" value={email} disabled={forMe} onChange={handleChangeEmail} />
                    </div>

                    <div className="field">
                        <label htmlFor="nom">Tél{forAnother ? <span>*</span> : null}</label>
                        {forAnother ?
                            <i><img src="./assets/images/edit.svg" alt="" /></i>
                            :
                            null
                        }
                        <input id="nom" value={phone} onChange={handleChangePhone} disabled={forMe} />
                    </div>
                    <div className="adresse">
                        <div>
                            Addresse
                        </div>
                        <p>
                            {adress?.adress}<br />
                            {adress?.country} - {adress?.city} <br />
                            {adress?.mobile}<br />
                        </p>
                    </div>

                </form >
                <div className="msg">
                    le nom et le prénom saisis seront mis sur votre billet
                </div>
                <div className="actions">
                    <button onClick={cancel} className="cancel">
                        Annuler
                    </button>
                    <button onClick={save} className="validate">
                        Valider

                    </button>
                </div>
            </div>
            <div className="recap col-12 col-lg-5 ">
                {false ?
                    <div className="circularProgress">
                        <CircularProgress style={{ 'color': '#C82345' }} />
                    </div>
                    :
                    null
                }
                <div className="segmantImg">
                    <img src="./assets/images/confirmation.png" alt="" />
                </div>
                <div className="recap-container">
                    <div className={false ? "load " : ""}>
                        <div className="recap-options">
                            <div className="options-fixes">
                                <div className="label">
                                    <div className="main">
                                        Options fixes
                                    </div>
                                    <div className="secondary">
                                        Itinéraires
                                    </div>
                                </div>
                                <svg className="line" xmlns="http://www.w3.org/2000/svg" height="3.146" viewBox="0 0 612.704 3.146">
                                    <g id="Groupe_648" data-name="Groupe 648" transform="translate(0.001 1.25)">
                                        <line id="Ligne_6368" data-name="Ligne 6368" y1="0.646" x2="612.701" transform="translate(0 0)" fill="none" stroke="#707070" stroke-width="2.5" stroke-dasharray="8" />
                                    </g>
                                </svg>
                                <div className="segment">
                                    <span className="col-5">{userRecap?.airportDeparture}</span>
                                    <svg className="arrow col-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.145 23.756">
                                        <g id="Groupe_646" data-name="Groupe 646" transform="translate(0 0)">
                                            <g id="Groupe_631" data-name="Groupe 631" transform="translate(1.563 0)">
                                                <line id="Ligne_6369" data-name="Ligne 6369" x2="28.14" transform="translate(0 5.472)" fill="none" stroke="#cb952b" stroke-width="2" />
                                                <path id="Polygone_1" data-name="Polygone 1" d="M5.472,0l5.472,9.38H0Z" transform="translate(25.892 13.595) rotate(-150)" fill="#cb952b" />
                                            </g>
                                            <g id="Groupe_632" data-name="Groupe 632" transform="translate(30.582 23.756) rotate(180)">
                                                <line id="Ligne_6369-2" data-name="Ligne 6369" x2="28.14" transform="translate(0 5.472)" fill="none" stroke="#cb952b" stroke-width="2" />
                                                <path id="Polygone_1-2" data-name="Polygone 1" d="M5.472,0l5.472,9.38H0Z" transform="translate(25.892 13.595) rotate(-150)" fill="#cb952b" />
                                            </g>
                                        </g>
                                    </svg>
                                    <span className="col-5">{userRecap?.airportArrival}</span>
                                </div>
                                <div className="text-secondary">
                                    Nombre de vol<br /><span>{userRecap?.baseConfig}</span>
                                </div>
                                <div className="text-secondary">
                                    Période de voyage<br /><span>{userRecap?.passDelay}</span>
                                </div>
                                <div className="text-secondary">
                                    Réservation à l'avance<br /><span>{userRecap?.dayToTravel}</span>
                                </div>
                            </div>
                            <div className="options-to-choose">
                                <div className="label">
                                    <div className="main">
                                        Options à choisir
                                    </div>
                                </div>
                                <ul>
                                    <li>
                                        <i><IoSend /></i>Voyage aux heures de pointe
                                    </li>
                                    <li>
                                        <i><IoSend /></i> Compensation carbone
                                    </li>
                                    <li>
                                        <i><IoSend /></i> Période de réservation anticipée
                                    </li>
                                </ul>
                            </div>
                            <div className="price">
                                <div className="price-container">
                                    {userRecap ? (
                                        <div className="total">
                                            {userRecap?.total | 1}
                                            <span>MAD</span>
                                            <div className="unitPrice">
                                                {(userRecap?.total / userRecap?.baseConfig) | 1} MAD/Vol
                                            </div>
                                        </div>
                                    ) :
                                        null
                                    }
                                    <p>(Taxes include et surcharges)</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default ConfirmationIndex;