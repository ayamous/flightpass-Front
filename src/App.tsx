import HeaderInder from "./component/header";
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import "./style/header.scss"
import "./style/userInterface.scss"
import "./style/header.scss"
import "./style/util.scss"
import "./style/map-vol0.scss"
import "./style/slider.scss"
import "./style/configuration.scss"
import "./style/description.scss"
import "./style/customization.scss"
import "./style/home.scss"
import "./style/App.scss"
import "./style/auth.scss"
import "./style/select.scss"
import "./style/confirmation.scss"
import "./style/achat.scss"
import "./style/drawer.scss"
import "./style/dialog.scss"
import "./style/recapPdf.scss"
import "./style/consomation.scss"

import HomeIndex from "./component/achat/home/index";
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth';
import Login from "./component/auth/login";
import AchatIndex from "./component/achat";
import { useEffect, useRef } from "react";
import axios from "axios";
import { configActions } from "./store/configuration";
import axiosInstance from "./axiosConfig";
import ConsomationIndex from "./component/consomation";
import TimePickerIndex from "./component/consomation/reservation/timePicker";



let isinitial = true;


const App: React.FunctionComponent = () => {
    const descriptionRef = useRef<HTMLDivElement>(null)
    let history = useHistory();
    const dispatch = useDispatch()
    useEffect(() => {
        
    }, [])
    const ScrollToDescription = () => descriptionRef.current?.scrollIntoView()
    return (
        <div className=" bg-white">
            <HeaderInder scroll={ScrollToDescription} />
            <div className=" bg-white ">
                <BrowserRouter>
                    <Route exact path="/" render={(props) => (<HomeIndex {...props} descriptionRef={descriptionRef} />)} />
                    <Route exact path="/configuration" component={AchatIndex} />
                    <Route exact path="/login" component={Login} />
                </BrowserRouter>
            </div>
        </div>
    );
};

export default App;

