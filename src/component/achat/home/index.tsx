import DescriptionIndex from "./description"
import SliderIdex from "./slider"
import CustomizationIndex from "./customization";
import axiosInstance from "../../../axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import { getSegmets, homeActions } from "../../../store/home";
import { useEffect, useRef } from "react";
import { config, Portlet, Segment } from "../../../type";
import { getPortlets, portletActions } from "../../../store/portlet";
import { AppDispatch, Istate, useAppDispatch } from "../../../store";
import SgmentDescriptionIndex from "./segmentDescription";
import { configActions } from "../../../store/configuration";

let isInitial = true
const HomeIndex: React.FC<{ descriptionRef: any }> = (props) => {
    const currentSegment_id = useSelector((state: Istate) => state.home.currentSegment_id)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const priceRef = useRef<HTMLDivElement>(null);
    const currency = useSelector((state: Istate) => state.header.currency)
    const segmentList = useSelector((state: Istate) => state.home.segmentList)
    const portletList = useSelector((state: Istate) => state.portlet.portletList)
    const test = useSelector((state: Istate) => state.portlet.test)
    const dispatch = useAppDispatch()

    //get all segments 
    useEffect(() => {
        try {
            const fetch = async () => {
                await dispatch(getSegmets()).unwrap()
            }
            fetch()
        } catch (err) {
        }
    }, [])

    //get the portlets of all segments 
    useEffect(() => {
        try {
            const fetch = async () => {
                await dispatch(getPortlets(segmentList)).unwrap()
                //set the current segment
                dispatch(homeActions.setcurrentSegment(segmentList[0].segmentId))
            }
            fetch()
        } catch (err) {
            console.log(err)
        }
    }, [segmentList])







    //calculate the base price of the current segment 
    useEffect(() => {
        console.log("in2")
        dispatch(homeActions.setLoadDefaultConfiguration(true))
        axiosInstance.get(`public/fp-dailyOffer/defaultConfig/${currentSegment.segmentId}/${currency}`)
            .then((res) => {
                const Configuration: config = {
                    nbrFlights: res.data.baseConfig.nbrFlights,
                    percentageNbrFlights: res.data.baseConfig.percentage,

                    dayToDeparture: res.data.dayToDeparture.nbrDays,
                    percentageDayToTravel: res.data.dayToDeparture.percentage,

                    delay: res.data.passDelay.nbrMonths,
                    percentagePassDelay: res.data.passDelay.percentage,
                }
                dispatch(configActions.setCurrentAllConfig(Configuration))
                dispatch(configActions.setCurrentPrice(res.data.flightpassPrice))
                setTimeout(() => {
                    dispatch(homeActions.setLoadDefaultConfiguration(false))
                }, 1000)
            })
    }, [currentSegment, currency])



    const executeScroll = () => priceRef.current?.scrollIntoView()


    return (
        <div className="home">
            <div className="top-side">
                <SliderIdex scroll={executeScroll} />
                <CustomizationIndex />
                <DescriptionIndex descriptionRef={props.descriptionRef} />
                <SgmentDescriptionIndex priceRef={priceRef} />
            </div>
        </div>

    )

}
export default HomeIndex