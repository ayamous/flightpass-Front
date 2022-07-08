import { GiAirplaneArrival } from "react-icons/gi";
import { RiArrowLeftRightLine } from "react-icons/ri";
import { GiAirplaneDeparture } from "react-icons/gi";
import { RiSendPlane2Line } from "react-icons/ri";
import MapEarth from "./mapEarth";
import Options from "./options";
import { useSelector } from "react-redux";
import { Istate } from "../../../../store";

const SgmentDescriptionIndex: React.FC<{ priceRef: any }> = (props) => {
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const portlets = useSelector((state: Istate) => state.portlet.portletList)
    const currentMapPortlet = portlets.find(portlet => portlet.segment_id == currentSegment.segmentId)?.portlets.find(element => element.position == "MAP")
    return (
        <div className="segmentDescription">
           {/* <h4 className="title">Nos Passes De Vols :</h4>*/}
            <div className="d-flex justify-content-between ">
                <div className="col-12 col-md-6  col-lg-6 ">
                    <Options priceRef={props.priceRef} />
                </div>

                <div className="col-md-6 col-lg-5  map">
                   <img src={currentMapPortlet?.imagePath} alt="" />
                </div>
            </div>
        </div>

    )
}
export default SgmentDescriptionIndex