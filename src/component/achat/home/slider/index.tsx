import React, { ReactEventHandler, useEffect, useState, useRef, LegacyRef } from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FC } from "react";
import { IconContext } from "react-icons";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import { Istate } from '../../../../store';
import { homeActions } from '../../../../store/home';
import { Portlet } from '../../../../type';
import { CircularProgress } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { portletSlider } from '../../../../default';
import axiosInstance from '../../../../axiosConfig';





const SliderIdex: React.FC<{ scroll: () => void }> = (props) => {
    let history = useHistory();
    const [ImageIndex, setImageIndex] = useState<number>(0);
    const sliderRef = useRef<Slider | null>(null) // type: Slider | null
    const LoadDefaultConfiguration = useSelector((state: Istate) => state.home.LoadDefaultConfiguration)
    const segment_id = useSelector((state: Istate) => state.home.currentSegment_id)
    const configuration = useSelector((state: Istate) => state.configuration.currentConfig)
    const totalPrice = useSelector((state: Istate) => state.configuration.totalPrice)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const currency = useSelector((state: Istate) => state.header.currency)
    //the portlets slider of all segments
    let portletSliderList = useSelector((state: Istate) => {
        let test: { segment_id: number, portlet: Portlet }[] = [];
        state.portlet.portletList.forEach(element => {
            const portlet = element.portlets.find(element => element.position == "SLIDER") || portletSlider
            /*let index = 0
            while (index < element.portlets.length) {
                if (element.portlets[index].position == "SLIDER") {
                    break;
                }
                index++;
            }
            if (index < element.portlets.length) {
                test.push({
                    segment_id: element.segment_id,
                    portlet: element.portlets[index]
                })
            }
            */
            test.push({
                segment_id: element.segment_id,
                portlet: portlet
            })

        });

        return test

    });

    useEffect(() => {
        if (portletSliderList.length == 0) {
            return
        }
        const currentIndex = portletSliderList.findIndex(element => element.segment_id == segment_id);
        if (currentIndex) {
            sliderRef.current?.slickGoTo(currentIndex);
        }
    }, [segment_id])





    const dispatch = useDispatch()


    interface Props {
        onClick?: ReactEventHandler
    }
    const NextArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow next" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: 'white' }}
                >
                    <i><GoChevronRight /></i>
                </IconContext.Provider>
            </button>
        );
    };

    const PrevArrow: FC<Props> = ({ onClick }) => {
        return (
            <button className="arrow prev" onClick={onClick}>
                <IconContext.Provider
                    value={{ color: '#C72D2D' }}
                >
                    <i><GoChevronLeft /></i>
                </IconContext.Provider>
            </button>
        );
    };

    const Dot: FC<Props> = () => {
        return (
            <div className='' />
        )
    }

    const slickSettings: Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        beforeChange: (current: number, next: number) => {
            console.log('in slider', portletSliderList)
            const segmentId = portletSliderList[next].segment_id
            setImageIndex(next)
            dispatch(homeActions.setcurrentSegment(segmentId))


        },

        customPaging: i => (<div className={ImageIndex == i ? "active dot" : "dot "} />)

    };
    const moveToPrice = () => {
        props.scroll()
    }
    const getImage = (path: string) => {
        axiosInstance.get(path)
    }


    return (
        <div className="slider">
            <div className='slider-text '>
                <div className='promotion'>
                    <div className='position-relative'>

                        {/*<div className='cart'>
                        <img src='./assets/images/Groupe-902.png' alt="" />
                    </div>
    */}
                        {LoadDefaultConfiguration ?
                            <div className="circularProgress">
                                <CircularProgress style={{ 'color': 'white' }} />
                            </div>
                            :
                            null
                        }
                        <div className={LoadDefaultConfiguration ? "load" : ''}>
                            <p>
                                <div>
                                    Passez
                                    <br />
                                    vos vacances
                                    <br />
                                    d’été à {currentSegment.arrivalAirportRef.city}
                                    <br />
                                    à partir de
                                    <br />
                                    <span>{parseInt(totalPrice.toString())} </span>{currency}
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='title'>
                    <div className="main">RAM FlightPass</div>
                    <div className="second">Billets multiples, Prix garanti</div>
                    <button onClick={moveToPrice}>Découvrir</button>
                </div>
            </div>
            <Slider ref={sliderRef} className="slider-container" {...slickSettings}>

                {portletSliderList.map((portletSlider, idx) => (
                    <div className={idx == ImageIndex ? "ActiveSlide" : "Inactive"}>
                        <img src={portletSlider.portlet.imagePath} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );

}
export default SliderIdex


