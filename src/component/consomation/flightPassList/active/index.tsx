import FlighPass from "./flighPass"
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
const ActiveIndex = () => {
    const data = {
        "content": [
            {
                "orderId": 3,
                "fullNamePassenger": "redouane el aouni",
                "remainingCoupons": 4,
                "departureAirport": "Mohammed V International Airport",
                "arrivalAirport": "Barcelona International Airport",
                "dayToTravel": 10,
                "expiryDate": "2022-09-09",
                "consumedCoupons": 16
            },
            {
                "orderId": 2,
                "fullNamePassenger": "redouane el aouni",
                "remainingCoupons": 5,
                "departureAirport": "Mohammed V International Airport",
                "arrivalAirport": "Blaise Diagne International Airport",
                "dayToTravel": 30,
                "expiryDate": "2022-09-09",
                "consumedCoupons": 10
            },
            {
                "orderId": 1,
                "fullNamePassenger": "redouane el aouni",
                "remainingCoupons": 7,
                "departureAirport": "Mohammed V International Airport",
                "arrivalAirport": "John F Kennedy International Airport",
                "dayToTravel": 30,
                "expiryDate": "2022-09-09",
                "consumedCoupons": 3
            }
        ],
        "pageable": {
            "sort": {
                "sorted": true,
                "unsorted": false,
                "empty": false
            },
            "offset": 0,
            "pageSize": 3,
            "pageNumber": 0,
            "paged": true,
            "unpaged": false
        },
        "last": true,
        "totalElements": 3,
        "totalPages": 1,
        "size": 3,
        "number": 0,
        "sort": {
            "sorted": true,
            "unsorted": false,
            "empty": false
        },
        "numberOfElements": 3,
        "first": true,
        "empty": false
    }
    const NextArrow = () => {
        return (
            <div className="arrow next" >
                <i> <MdOutlineNavigateNext /></i>

            </div>
        );
    };

    const PrevArrow = () => {
        return (
            <div className="arrow prev" >
                <i><MdOutlineNavigateBefore /></i>
            </div>
        );
    };
    const slickSettings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: true,
        beforeChange: (current: number, next: number) => {
            //console.log('in slider', portletSliderList)
            //const segmentId = portletSliderList[next].segment_id
            //setImageIndex(next)
            //dispatch(homeActions.setcurrentSegment(segmentId))
        },

        //customPaging: i => (<div className={ImageIndex == i ? "active dot" : "dot "} />)

    };
    return (
        <div>
            <div className="flightPass-slider">
                <NextArrow />
                <PrevArrow />
                <Slider {...slickSettings}>
                    {data.content.map(element => (
                        <FlighPass />
                    ))}
                </Slider>
            </div>
            <div className="flightPass-list">
                {data.content.map(elemment => (
                    <FlighPass />
                ))}
            </div>
        </div>
    )
}
export default ActiveIndex