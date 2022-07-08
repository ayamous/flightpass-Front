import {MdAirlineSeatFlatAngled} from 'react-icons/md';
import {IoMdPricetags} from 'react-icons/io';
import {FaCalendarAlt} from 'react-icons/fa';
import {IoMdAirplane} from 'react-icons/io';
import {BsSliders} from 'react-icons/bs';
import {MdSubscriptions} from 'react-icons/md';
import {RiBook2Line} from 'react-icons/ri';

const DescriptionIndex : React.FC<{ descriptionRef: any }> = (props) => {

    return (
        <div ref={props.descriptionRef}  className="description">
            <h2 className="large-device">
                Comment Ça Fonctionne ?
            </h2>
            <ul className='large-device'>
                <li>
                    <i className='mb-3'><IoMdAirplane/></i>
                    <h6 className='mb-3'>
                        Choisissez
                        un FlightPass
                    </h6>
                    <p className='text-center'>
                        Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                    </p>

                </li>
                <li>
                    <i className='mb-3'><BsSliders/></i>
                    <h6 className='mb-3'>
                        Choisissez
                        un FlightPass
                    </h6>
                    <p className='text-center'>
                        Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                    </p>

                </li>
                <li>
                    <i className='mb-3'><MdSubscriptions/></i>
                    <h6 className='mb-3'>
                        Choisissez
                        un FlightPass
                    </h6>
                    <p className='text-center'>
                        Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                    </p>
                </li>
                <li>
                    <div className='section d-flex flex-column align-items-center'>
                        <i className='mb-3'><RiBook2Line/></i>
                        <h6 className='mb-3'>
                            Choisissez
                            un FlightPass
                        </h6>
                        <p className='text-center'>
                            Achetez votre abonnement maintenant et réservez vos vols à votre convenance
                        </p>
                    </div>
                </li>
            </ul>
        </div>

    )

}
export default DescriptionIndex