import { MdAirplanemodeActive } from "react-icons/md"
import ActiveIndex from "./flightPassList/active"


const ConsomationIndex = () => {

    return (
        <div className="consomation">
            <div className="menu">
                <ul>
                    <li className="main-list  active">
                        <div className="label">
                            <i>
                                <MdAirplanemodeActive />
                            </i><span>Mes Flightpass</span>
                        </div>
                        <ul>
                            <li className="active">
                                Mes flightpass actifs
                            </li>
                            <li>
                                Historiique
                            </li>
                        </ul>
                    </li>
                    <li className="main-list">
                        <div className="label">
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="25.5" height="25.5" viewBox="0 0 25.5 25.5">
                                <path id="Icon_awesome-buysellads" data-name="Icon awesome-buysellads" d="M12.75,9.006l2.442,9.147H10.308ZM25.5,4.982V25.018a2.733,2.733,0,0,1-2.732,2.732H2.732A2.733,2.733,0,0,1,0,25.018V4.982A2.733,2.733,0,0,1,2.732,2.25H22.768A2.733,2.733,0,0,1,25.5,4.982ZM21.783,23.5,16.4,6.5H9.1l-5.379,17H8.879l6.358-5.214L16.615,23.5Z" transform="translate(0 -2.25)" />
                            </svg>
                            </i>
                            <span>
                                Acheter un Flightpass
                            </span>
                        </div>

                    </li>
                    <li className="main-list">
                        <div className="label">
                            <i><svg xmlns="http://www.w3.org/2000/svg" width="24.751" height="22" viewBox="0 0 24.751 22">
                                <path id="Icon_material-details" data-name="Icon material-details" d="M4.5,6,16.875,28,29.251,6ZM9.148,8.75H24.617L16.875,22.5Z" transform="translate(-4.5 -6)" />
                            </svg>
                            </i>
                            <span>
                                Détail du compte
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="consomation-container">
                <ActiveIndex />
            </div>
        </div>
    )

}
export default ConsomationIndex