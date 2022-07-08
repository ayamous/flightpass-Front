import { MouseEvent, useEffect, useState } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../../../axiosConfig"
import { defaultDelayToDeparture } from "../../../default"
import { Istate } from "../../../store"
import { configActions } from "../../../store/configuration"
import { priceParams } from "../../../type"
let isInitial = true;
const SelectDayToDepparture = () => {
    const dispatch = useDispatch()
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const dayToDepartureListe = useSelector((state: Istate) => state.configuration.dayToDepartureList)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)
    const currentSegment = useSelector((state: Istate) => state.configuration.currentConfig)




    const onChangeDayToDeparture = (event: MouseEvent) => {
        setExpanded(false)
        const dayToDeparture = dayToDepartureListe.find(element => element.nbrDays == Number(event.currentTarget.id)) || defaultDelayToDeparture
        dispatch(configActions.setCurrentDayToDeparture(dayToDeparture))



    }
    return (
        <div className="cust-select">
            <div className="select-container">
                <div className="value ">
                    <span>{currentConfig.dayToDeparture} jours</span>
                    <button onClick={() => setExpanded(!isExpanded)}>
                        <i className="icon-down">
                            <AiFillCaretDown />
                        </i>
                    </button>
                </div>
                <div className={isExpanded ? "items" : "items closed"}>
                    <ul>
                        {dayToDepartureListe.map(dayToDeparture => (
                            <li id={dayToDeparture.nbrDays.toString()} onClick={onChangeDayToDeparture} key={dayToDeparture.nbrDays} >
                                <span>
                                    {dayToDeparture.nbrDays} jours
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectDayToDepparture