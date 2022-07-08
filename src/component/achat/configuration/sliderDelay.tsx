import { ChangeEvent, useState, MouseEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axiosInstance from "../../../axiosConfig"
import { defaultPassDelay } from "../../../default"
import { Istate } from "../../../store"
import { configActions } from "../../../store/configuration"
import { priceParams } from "../../../type"
let isInitial = true
const SliderDelay = () => {
    const dispatch = useDispatch()
    const sliderDelayStep = useSelector((state: Istate) => state.configuration.sliderDelayStep)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)
    const passDelayList = useSelector((state: Istate) => state.configuration.delayList)
    const [stepWidth, setstepWidth] = useState<number>(90)
    const [index, setIndex] = useState<number>(1)
    const [stepClass, setStepClass] = useState<string>("")
    const currentSegment = useSelector((state: Istate) => state.configuration.currentConfig)
    useEffect(() => {
        setstepWidth((100 / (passDelayList.length)-10) * sliderDelayStep)
    }, [sliderDelayStep])
    const divStyle = {
        width: (stepWidth).toString() + "%"

    };
    const divStylee = {
        marginLeft: (((100 / (passDelayList.length))) - 10).toString() + "%"

    }
    const divStyleee = {
        bottom: "47px"
    }
    const hide = async (index: number, step: number) => {
        let className = " "
        await new Promise(resolve => setTimeout(resolve, 250));

        if (index == sliderDelayStep - 1) {
            return className = 'd-none'
        }
        return className
    }


    const onchangeStep = (event: MouseEvent) => {
        const passDelay = passDelayList.find(pass => pass.nbrMonths == Number(event.currentTarget.id)) || defaultPassDelay
        dispatch(configActions.setCurrentpassDelay(passDelay))

    }

    useEffect(() => {
        const index = passDelayList.findIndex(pass => pass.nbrMonths == currentConfig.delay)
        dispatch(configActions.setPassDelaySlider(index + 1))
    }, [currentConfig.delay])



    return (

        <div className="sliderDelay">
            <div className="rail">
                <i className='left'>
                    <img src="./assets/images/Groupe 894.svg" />
                </i>
                <i className='right'>
                    <img src="./assets/images/Groupe 894.svg" />
                </i>
            </div>
            <div style={divStyle} className="stepContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 29">
                    <line id="Ligne_6383" data-name="Ligne 6383" y2="29" transform="translate(3)" fill="none" stroke="#d00b41" stroke-width="6" />
                </svg>
            </div>
            <div className="d-flex">
                {passDelayList.map((delay, index) => (
                    <div key={index} style={divStylee} className="step">
                        <button id={delay.nbrMonths.toString()} onClick={onchangeStep}>
                            <span style={index % 2 != 0 ? divStyleee : {}}>
                                {delay.nbrMonths} Mois
                            </span>
                        </button>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default SliderDelay