import { MdAirlineSeatFlatAngled } from 'react-icons/md';
import { IoIosArrowBack, IoMdClose, IoMdPricetags } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoMdAirplane } from 'react-icons/io';
import { BsSliders } from 'react-icons/bs';
import { MdSubscriptions } from 'react-icons/md';
import { RiBook2Line } from 'react-icons/ri';
import { Drawer, IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Istate } from '../../store';
import { drawerActions } from '../../store/drawer';

const DescriptionIndex = () => {
    const dispatch = useDispatch()
    const descriptionOpen = useSelector((state: Istate) => state.drarwer.descriptionOpen)
    const closeDrawer = () => {
        dispatch(drawerActions.setDescriptionOpen(false))
    }
    return (
        <div>
            <Drawer
                open={descriptionOpen}
                anchor={"right"}
            >
                <div className='drawer-description'>
                    <IconButton onClick={closeDrawer} className='close' >
                        <IoIosArrowBack />
                    </IconButton>
                    <h3 >
                        Comment Ça Fonctionne ?
                    </h3>
                    <ul>
                        <li>
                            <i ><IoMdAirplane /></i>
                            <p >
                                <h6 >
                                    Choisissez
                                    un FlightPass
                                </h6>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>

                        </li>
                        <li>
                            <i><BsSliders /></i>
                            <p>
                                <h6 >
                                    Choisissez
                                    un FlightPass
                                </h6>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>

                        </li>
                        <li>
                            <i><MdSubscriptions /></i>
                            <p>
                                <h6 >
                                    Choisissez
                                    un FlightPass
                                </h6>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>
                        </li>
                        <li>
                            <i><RiBook2Line /></i>
                            <p>
                                <h6 >
                                    Choisissez
                                    un FlightPass
                                </h6>
                                Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                            </p>
                        </li>
                    </ul>
                </div>


            </Drawer>
        </div>

    )

}
export default DescriptionIndex