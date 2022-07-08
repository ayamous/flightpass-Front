import { useSelector } from "react-redux"
import { Istate } from "../../../store"


const ConfigurationStepper = () => {
    const step = useSelector((state: Istate) => state.configuration.step)
    return (
        <div className="stepper">
            <div className="col-4 selection update ">
                <div className={step == "configuration" ? 'active-phase' : ''}>
                    <i>
                        {step == "configuration" ?
                            <img src='./assets/images/Untitled-1-03.png' alt="" />
                            :
                            <img src='./assets/images/update.png' alt="" />
                        }
                    </i>
                    <h6>Sélection</h6>
                </div>
            </div>
            <div className="col-4 selection info">
                <div className={step == "confirmation" ? 'active-phase' : ''}>
                    <i>
                        {step == "confirmation" ?
                            <img src='./assets/images/autActive.png' />
                            :
                            <img src='./assets/images/Groupe 868.png' />
                        }
                    </i>
                    <h6>Informations personnels</h6>
                </div>
            </div>
            <div className="col-4 selection payment">
                <div>
                    <i><img src='./assets/images/Untitled-1-04.png' /></i>
                    <h6>Paiement</h6>
                </div>
            </div>
        </div>
    )
}
export default ConfigurationStepper