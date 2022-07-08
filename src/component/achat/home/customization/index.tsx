import { MdAirlineSeatFlatAngled } from "react-icons/md";
import { GoChevronUp, GoPlus } from "react-icons/go";
import { IoMdPricetags } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { useState } from "react";
import { GrFormUp } from "react-icons/gr"

const CustomizationIndex = () => {
    const [open, setOpen] = useState<{ 1: Boolean, 2: Boolean, 3: Boolean }>({ 1: false, 2: false, 3: false })
    return (
        <div className="customization">
            <ul className="small-device">
                <li className={open?.[1] ? "" : "active"}>
                    <div>
                        <div>
                            <i className="seat">
                                <MdAirlineSeatFlatAngled />
                            </i>
                            <span>Siège garanti</span>
                        </div>
                        <i className="plus" onClick={() => setOpen({ 1: !open[1], 2: false, 3: false })}>
                            {open[1] ? <GoChevronUp /> : <GoPlus />}
                        </i>
                    </div>
                    <p className={open?.[1] ? "active" : ""}>
                        Achetez votre abonnement  maintenant et réservez vos  vols à votre convenance
                    </p>
                </li>
                <li>
                    <div>
                        <div>
                            <i className="price">
                                <IoMdPricetags />
                            </i>
                            <span>Prix fixe garanti</span>
                        </div>
                        <i className="plus" onClick={() => setOpen({ 1: false, 2: !open[2], 3: false })}>
                            {open[2] ? <GoChevronUp /> : <GoPlus />}
                        </i>
                    </div>
                    <p className={open?.[2] ? "active" : ""}>
                        Achetez votre abonnement  maintenant et réservez vos  vols à votre convenance
                    </p>
                </li>
                <li>
                    <div>
                        <div>
                            <i className="calendar">
                                <FaCalendarAlt />
                            </i>
                            <span>Personnalisez-le</span>
                        </div>
                        <i className="plus" onClick={() => setOpen({ 1: false, 2: false, 3: !open[3] })}>
                            {open[3] ? <GoChevronUp/> : <GoPlus />}
                        </i>
                    </div>
                    <p className={open?.[3] ? "active" : ""}>
                        Achetez votre abonnement  maintenant et réservez vos  vols à votre convenance
                    </p>

                </li>
            </ul>
            <ul className="large-device">
                <li className="">
                    <div className="d-flex">
                        <i><MdAirlineSeatFlatAngled /></i>
                        <div>
                            <h6>Siège garanti</h6>
                            <p>
                                Achetez votre abonnement <br /> maintenant et réservez vos <br /> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="d-flex">
                        <i><IoMdPricetags /></i>
                        <div>
                            <h6>Prix fixe garanti</h6>
                            <p>
                                Achetez votre abonnement <br /> maintenant  et réservez vos <br /> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
                <li className="">
                    <div className="d-flex">
                        <i><FaCalendarAlt /></i>
                        <div>
                            <h6>Personnalisez-le</h6>
                            <p>
                                Achetez votre abonnement<br /> maintenant et réservez vos <br /> vols à votre convenance
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default CustomizationIndex