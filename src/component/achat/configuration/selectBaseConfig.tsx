import { useEffect, useState, MouseEvent } from "react"
import { AiFillCaretDown } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../../../axiosConfig"
import { defaultBaseConfig } from "../../../default"
import { Istate } from "../../../store"
import { configActions } from "../../../store/configuration"
import { homeActions } from "../../../store/home"
import { priceParams } from "../../../type"
let isInitial = true;
const SelectBaseConfig = () => {
    const dispatch = useDispatch()
    const [isExpanded, setExpanded] = useState<boolean>(false)
    const baseConfigListe = useSelector((state: Istate) => state.configuration.baseConfigList)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)



    const onChangeBaseConfig = (event: MouseEvent) => {
        setExpanded(false)
        const baseconfig = baseConfigListe.find(element => element.nbrFlights == Number(event.currentTarget.id)) || defaultBaseConfig
        dispatch(configActions.setCurrentBaseConfig(baseconfig))

    }
    return (
        <div className="cust-select">
            <div className="select-container">
                <div className="value ">
                    <span >{currentConfig.nbrFlights} coupon</span>
                    <button onClick={() => setExpanded(!isExpanded)}>
                        <i className="icon-down">
                            <AiFillCaretDown />
                        </i>
                    </button>
                </div>
                <div className={isExpanded ? "items" : "items closed"}>
                    <ul>
                        {baseConfigListe.map(baseConfig => (
                            <li id={baseConfig.nbrFlights.toString()} onClick={onChangeBaseConfig} key={baseConfig.nbrFlights} >
                                <span>
                                    {baseConfig.nbrFlights} coupons
                                </span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SelectBaseConfig