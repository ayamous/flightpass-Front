import { useEffect } from "react"
import ConfigurationStepper from "./configuration/stepper"
import {
    BrowserRouter as Router,
    Link,
    useLocation
} from "react-router-dom";
import useQuery from "../customHooks/Routes/useQuery";
import Options from "./home/segmentDescription/options";
import ConfirmationIndex from "./confirmation";
import ConfigurationOptions from "./configuration/options";
import ConfigurationIndex from "./configuration";

const AchatIndex = () => {
    let query = useQuery();
    const step = query.get('step')

    useEffect(() => {

    }, [])
    return (
        <div className="achat ">
            <div className="achat-container">
                <ConfigurationStepper />
                {(() => {
                    switch (step) {
                        case "configuration":
                            return <ConfigurationIndex />
                        case "confirmation":
                            return <ConfirmationIndex />
                        default:
                            return <ConfigurationIndex />
                    }
                })()}

            </div>

        </div>
    )

}
export default AchatIndex