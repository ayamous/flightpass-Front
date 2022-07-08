import {IoAirplaneSharp, IoSend} from "react-icons/io5"
import {useDispatch, useSelector} from "react-redux";
import {Istate} from "../../../../store";
import React, {useEffect, useRef, useState} from "react";

import {homeActions} from "../../../../store/home";
import CustSelect from "./select";
import {Item} from "../../../../type";
import {Value} from "sass";
import {AiFillCaretDown} from "react-icons/ai";
import {CircularProgress} from "@mui/material";
import {Link, useHistory} from "react-router-dom";
import {configActions} from "../../../../store/configuration";
import {IoMdHeartHalf} from "react-icons/io";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import {GiEarthAfricaEurope} from "react-icons/gi";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import SelectSegment from "../../configuration/selectSegment";

const airplan: any = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.169 21.519">
    <g id="Groupe_917" data-name="Groupe 917" transform="translate(17.259 -14.836) rotate(47)">
        <path id="Tracé_140" data-name="Tracé 140"
              d="M31.867,18.044a2.206,2.206,0,0,0-.021-.837,19.679,19.679,0,0,0-2.6-4.157c-1.835-1.845-3.925-2.5-6.361-3.129l-3.018-.775a.043.043,0,0,1-.025-.017L14.341,1.3a.767.767,0,0,0-.356-.276L12.449.44a.474.474,0,0,0-.612.6L14.11,7.6a.044.044,0,0,1-.053.057L6.791,5.787,6.681,5.76A5.59,5.59,0,0,1,3.406,3.332L1.587.433A.918.918,0,0,0,1.213.084.849.849,0,0,0,0,.89L.219,5.98A2.066,2.066,0,0,0,1.472,7.794l1.846.784,10.606,4.344,14.988,6.139C30.382,19.686,31.649,19.229,31.867,18.044Z"
              transform="translate(0 21.754) rotate(-43)" fill="#cf013e"/>
        <path id="Tracé_141" data-name="Tracé 141"
              d="M7.789,1.823,3.346,0,.161,2A.344.344,0,0,0,.1,2.532l.3.311a1.726,1.726,0,0,0,1.606.476Z"
              transform="translate(14.996 25.92) rotate(-43)" fill="#cf013e"/>
    </g>
</svg>


const Options: React.FC<{ priceRef: any }> = (props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    const [openMap, setOpenMap] = useState<boolean>(false)
    let history = useHistory();
    const dispatch = useDispatch()
    const LoadDefaultConfiguration = useSelector((state: Istate) => state.home.LoadDefaultConfiguration)
    const segmentList = useSelector((state: Istate) => state.home.segmentList)
    const currentSegment = useSelector((state: Istate) => state.home.currentSegment)
    const currentConfig = useSelector((state: Istate) => state.configuration.currentConfig)
    const portlets = useSelector((state: Istate) => state.portlet.portletList)
    const currentMapPortlet = portlets.find(portlet => portlet.segment_id == currentSegment.segmentId)?.portlets.find(element => element.position == "PROMOTION")
    const currentMapPortlet1 = portlets.find(portlet => portlet.segment_id == currentSegment.segmentId)?.portlets.find(element => element.position == "MAP")


    const LinkToConfig = () => {
        dispatch(configActions.setFromHome(true))
        history.push("/configuration");
    }
    return (
        <div className="options">
            <Dialog
                open={openMap}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <div className="dialog-map">
                        <img src={currentMapPortlet1?.imagePath}/>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpenMap(false)} variant="contained" autoFocus>
                        close
                    </Button>
                </DialogActions>
            </Dialog>
            {LoadDefaultConfiguration ?
                <div className="circularProgress">
                    <CircularProgress style={{'color': '#C82345'}}/>
                </div>
                :
                null
            }
            <div className="title">
                <img src={currentMapPortlet?.imagePath} alt=""/>
                <h4>FlightPass</h4>
            </div>
            <div className={LoadDefaultConfiguration ? "load" : ""}>
                <div ref={props.priceRef} className="options-fixes">
                    <div className="label">
                        <div className="main">
                            Options fixes
                        </div>
                        <div className="secondary">
                            Itinéraires

                        </div>
                    </div>
                    <div className="segment-container">
                        <SelectSegment/>
                        {/* <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            //onChange={handleChange}
                        >
                            {/*{segmentList.map(segment => (
                                <MenuItem>
                                    <div className="segment-items">
                                        <div className="air-port">
                                            <i>
                                                <IoAirplaneSharp/>
                                            </i>
                                            <span>{currentSegment?.departureAirportRef.city}</span>
                                        </div>
                                        <i className="arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.741 17.546">
                                                <g id="Groupe_915" data-name="Groupe 915"
                                                   transform="translate(-207.5 -1735)">
                                                    <g id="Groupe_631" data-name="Groupe 631"
                                                       transform="translate(208.655 1735)">
                                                        <line id="Ligne_6369" data-name="Ligne 6369" x2="20.783"
                                                              transform="translate(0 4.041)" fill="none"
                                                              stroke="#cb952b" stroke-width="2"/>
                                                        <path id="Polygone_1" data-name="Polygone 1"
                                                              d="M4.041,0,8.082,6.928H0Z"
                                                              transform="translate(19.123 10.041) rotate(-150)"
                                                              fill="#cb952b"/>
                                                    </g>
                                                    <g id="Groupe_632" data-name="Groupe 632"
                                                       transform="translate(230.086 1752.546) rotate(180)">
                                                        <line id="Ligne_6369-2" data-name="Ligne 6369" x2="20.783"
                                                              transform="translate(0 4.041)" fill="none"
                                                              stroke="#cb952b" stroke-width="2"/>
                                                        <path id="Polygone_1-2" data-name="Polygone 1"
                                                              d="M4.041,0,8.082,6.928H0Z"
                                                              transform="translate(19.123 10.041) rotate(-150)"
                                                              fill="#cb952b"/>
                                                    </g>
                                                </g>
                                            </svg>
                                        </i>
                                        <div className="air-port ">
                                            <span>{currentSegment?.departureAirportRef.city}</span>
                                            <i className="air-plan ">
                                                <IoAirplaneSharp/>
                                            </i>
                                        </div>
                                    </div>
                                </MenuItem>
                            ))}

                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        */}
                        <div className="trajet-btn">
                            <IconButton onClick={() => setOpenMap(true)}>
                                <i className="earth"><GiEarthAfricaEurope/></i><span>Trajet</span>   <i className="icon-down">
                                <AiFillCaretDown/>
                            </i>
                            </IconButton>
                        </div>


                        <svg className="line" xmlns="http://www.w3.org/2000/svg" height="3.146"
                             viewBox="0 0 612.704 3.146">
                            <g id="Groupe_648" data-name="Groupe 648" transform="translate(0.001 1.25)">
                                <line id="Ligne_6368" data-name="Ligne 6368" y1="0.646" x2="612.701"
                                      transform="translate(0 0)" fill="none" stroke="#707070" stroke-width="2.5"
                                      stroke-dasharray="8"/>
                            </g>
                        </svg>

                        <div className="text-secondary">
                            Voyage vers le même aéroport<br/><span>Jusqu’à {currentConfig.nbrFlights} fois</span>
                        </div>
                        <div className="text-secondary">
                            Nombre de vol <br/><span>{currentConfig.nbrFlights}</span>
                        </div>
                        <div className="text-secondary">
                            Durée de Flightpass <br/><span>{currentConfig.delay} mois</span>
                        </div>
                        <div className="text-secondary">
                            Réservation à l'avance <br/><span>{currentConfig.dayToDeparture} jours</span>
                        </div>
                    </div>
                </div>
                <div className="options-to-choose ">
                    <div className="label">
                        <div className="main">
                            Options à choisir
                        </div>
                    </div>
                    <ul>
                        <li>
                            <i><IoSend/></i>Voyage aux heures de pointe
                        </li>
                        <li>
                            <i><IoSend/></i> Compensation carbone
                        </li>
                        <li>
                            <i><IoSend/></i> Période de réservation anticipée
                        </li>
                    </ul>
                    {/*
                    <div id="price" className="price ">
                        <div className="base-price">
                            {totalPrice | 1} <span>{currency}</span>
                        </div>
                        <button onClick={LinkToConfig}>
                            Configurator
                        </button>
                    </div>
                    */}
                </div>

            </div>
        </div>

    )
}
export default Options