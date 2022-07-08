import { ReactElement, useState, MouseEvent } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { IconType } from "react-icons/lib"
import { useDispatch, useSelector } from "react-redux"
import { Istate } from "../../../../store"
import { configActions } from "../../../../store/configuration"
import { homeActions } from "../../../../store/home"
import { Item } from "../../../../type"


const arrow = <i className="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.887 28">
    <g id="Groupe_646" data-name="Groupe 646" transform="translate(-207.5 -1735)">
        <g id="Groupe_631" data-name="Groupe 631" transform="translate(209.343 1735)">
            <line id="Ligne_6369" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
            <path id="Polygone_1" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
        </g>
        <g id="Groupe_632" data-name="Groupe 632" transform="translate(243.544 1763) rotate(180)">
            <line id="Ligne_6369-2" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
            <path id="Polygone_1-2" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
        </g>
    </g>
</svg>
</i>
let isInitial = true
const CustSelect = () => {
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
        <div className="cust-select">
            <div className="select-container">
                <div className="value ">
                    <span>
                        {currentSegment.departureAirportRef.city}
                    </span>
                    {arrow}
                    <span>
                        {currentSegment.arrivalAirportRef.city}
                    </span>
                    <button onClick={() => setExpanded(!isExpanded)}>
                        <i className="icon-down">
                            <AiFillCaretDown />
                        </i>
                    </button>
                </div>
                <div className={isExpanded ? "items" : "items closed"}>
                    <ul>
                        {segmentList.map(segment => (
                            <li onClick={onChangeSegment} id={segment.segmentId.toString()} key={segment.segmentId} >
                                <span>
                                    {segment.departureAirportRef.city}
                                </span>
                                <i className="arrow"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.887 28">
                                    <g id="Groupe_646" data-name="Groupe 646" transform="translate(-207.5 -1735)">
                                        <g id="Groupe_631" data-name="Groupe 631" transform="translate(209.343 1735)">
                                            <line id="Ligne_6369" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
                                            <path id="Polygone_1" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
                                        </g>
                                        <g id="Groupe_632" data-name="Groupe 632" transform="translate(243.544 1763) rotate(180)">
                                            <line id="Ligne_6369-2" data-name="Ligne 6369" x2="33.166" transform="translate(0 6.449)" fill="none" stroke="#b59966" stroke-width="2" />
                                            <path id="Polygone_1-2" data-name="Polygone 1" d="M6.449,0,12.9,11.055H0Z" transform="translate(30.517 16.023) rotate(-150)" fill="#b69a63" />
                                        </g>
                                    </g>
                                </svg>
                                </i>
                                <span>
                                    {segment.arrivalAirportRef.city}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default CustSelect