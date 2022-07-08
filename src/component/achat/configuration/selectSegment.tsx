import {useDispatch, useSelector} from "react-redux"
import {Istate} from "../../../store"
import {AiFillCaretDown} from "react-icons/ai"
import {useEffect, useState, MouseEvent} from "react"
import axiosInstance from "../../../axiosConfig"
import {configActions} from "../../../store/configuration"
import {homeActions} from "../../../store/home"
import {priceParams} from "../../../type"
import {IoAirplaneSharp} from "react-icons/io5";

const arrow = <i className="arrow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.887 28">
        <g id="Groupe_646" data-name="Groupe 646" transform="translate(-207.5 -1735)">
            <g id="Groupe_631" data-name="Groupe 631" transform="translate(209.343 1735)">
                <line id="Ligne_6369" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none"
                      stroke="#b59966" stroke-width="2"/>
                <path id="Polygone_1" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z"
                      transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63"/>
            </g>
            <g id="Groupe_632" data-name="Groupe 632" transform="translate(243.544 1763) rotate(180)">
                <line id="Ligne_6369-2" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none"
                      stroke="#b59966" stroke-width="2"/>
                <path id="Polygone_1-2" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z"
                      transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63"/>
            </g>
        </g>
    </svg>
</i>
let isInitial = true
const SelectSegment = () => {
    const dispatch = useDispatch()
    const segmentList = useSelector((state: Istate) => state.home.segmentList)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const [index, setIndex] = useState<number>(1)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)


    const onChangeSegment = (event: MouseEvent) => {
        setExpanded(false)
        dispatch(homeActions.setcurrentSegment(Number(event.currentTarget.id)))
        dispatch(configActions.setCurrentSegment(Number(event.currentTarget.id)))

    }


    return (
        <div className="select-segment custom-select">
            <div className="select-container ">
                <div className="value">
                    <div className="air-port">
                        <i>
                            <IoAirplaneSharp/>
                        </i>
                        <span>{currentSegment?.departureAirportRef.city}</span>
                    </div>
                    <i className="arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.741 17.546">
                            <g id="Groupe_915" data-name="Groupe 915"
                               transform="translate(-207.5 -1735)">
                                <g id="Groupe_631" data-name="Groupe 631"
                                   transform="translate(208.655 1735)">
                                    <line id="Ligne_6369" data-name="Ligne 6369" x2="20.783"
                                          transform="translate(0 4.041)" fill="none"
                                          stroke="#cb952b" stroke-width="2"/>
                                    <path id="Polygone_1" data-name="Polygone 1"
                                          d="M4.041,0,8.082,6.928H0Z"
                                          transform="translate(19.123 10.041) rotate(-150)"
                                          fill="#cb952b"/>
                                </g>
                                <g id="Groupe_632" data-name="Groupe 632"
                                   transform="translate(230.086 1752.546) rotate(180)">
                                    <line id="Ligne_6369-2" data-name="Ligne 6369" x2="20.783"
                                          transform="translate(0 4.041)" fill="none"
                                          stroke="#cb952b" stroke-width="2"/>
                                    <path id="Polygone_1-2" data-name="Polygone 1"
                                          d="M4.041,0,8.082,6.928H0Z"
                                          transform="translate(19.123 10.041) rotate(-150)"
                                          fill="#cb952b"/>
                                </g>
                            </g>
                        </svg>
                    </i>

                    <div className="air-port">
                        <span>{currentSegment?.arrivalAirportRef.city}</span>
                        <i>
                            <IoAirplaneSharp/>
                        </i>
                    </div>
                    <button className="native-btn" onClick={() => setExpanded(!isExpanded)}>
                        <i className="icon-down">
                            <AiFillCaretDown/>
                        </i>
                    </button>
                </div>

                <div className={isExpanded ? "items" : "items closed"}>
                    <ul>
                        {segmentList.map(segment => (
                            <li onClick={onChangeSegment} id={segment.segmentId.toString()} key={segment.segmentId}>
                                <div className="segment-items">
                                    <div className="air-port">
                                        <i>
                                            <IoAirplaneSharp/>
                                        </i>
                                        <span>{currentSegment?.departureAirportRef.city}</span>
                                    </div>
                                    <i className="arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.741 17.546">
                                            <g id="Groupe_915" data-name="Groupe 915"
                                               transform="translate(-207.5 -1735)">
                                                <g id="Groupe_631" data-name="Groupe 631"
                                                   transform="translate(208.655 1735)">
                                                    <line id="Ligne_6369" data-name="Ligne 6369" x2="20.783"
                                                          transform="translate(0 4.041)" fill="none"
                                                          stroke="#cb952b" stroke-width="2"/>
                                                    <path id="Polygone_1" data-name="Polygone 1"
                                                          d="M4.041,0,8.082,6.928H0Z"
                                                          transform="translate(19.123 10.041) rotate(-150)"
                                                          fill="#cb952b"/>
                                                </g>
                                                <g id="Groupe_632" data-name="Groupe 632"
                                                   transform="translate(230.086 1752.546) rotate(180)">
                                                    <line id="Ligne_6369-2" data-name="Ligne 6369" x2="20.783"
                                                          transform="translate(0 4.041)" fill="none"
                                                          stroke="#cb952b" stroke-width="2"/>
                                                    <path id="Polygone_1-2" data-name="Polygone 1"
                                                          d="M4.041,0,8.082,6.928H0Z"
                                                          transform="translate(19.123 10.041) rotate(-150)"
                                                          fill="#cb952b"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </i>
                                    <div className="air-port ">
                                        <span>{currentSegment?.arrivalAirportRef.city}</span>
                                        <i className="air-plan ">
                                            <IoAirplaneSharp/>
                                        </i>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectSegment