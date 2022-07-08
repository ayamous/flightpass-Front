import { BiUser } from 'react-icons/bi';
import { BiUserCircle } from 'react-icons/bi';
import { FiMenu } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { Istate } from '../../store';
import { User } from '../../type';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io"
import { useState } from 'react';
import DescriptionIndex from '../achat/home/description';
import { drawerActions } from '../../store/drawer';
import DrawerIndex from '../drawer';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FaUserAlt } from 'react-icons/fa';
import { makeStyles } from '@mui/styles';
import { headerhActions } from '../../store/header';
import { useHistory, useLocation } from "react-router-dom"

const useStyles = makeStyles({
    root: {
        backgroundColor: "dark",
        width: '90px',
        height: '30px',
        fontSize: "16px",
        padding: '0px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            fontSize: "16px",
            backgroundColor: "dark",
            padding: '0px',
        }


    },

});


const HeaderInder  : React.FC<{ scroll: () => void  }> = (props) => {
    let history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch()
    const image = ['./assets/images/logo-ram.svg', './assets/images/oneworld.png']
    const isAuthenticated: boolean = useSelector((state: Istate) => state.auth.isAuthenticated);
    const user = useSelector((state: Istate) => state.auth.firstName);
    const summaryDrawer = useSelector((state: Istate) => state.drarwer.summaryOpen)
    const currency = useSelector((state: Istate) => state.header.currency)
    const onClickDrawer = () => {
        dispatch(drawerActions.setSummaryOpen(!summaryDrawer))
    }
    const handleChangeCurrency = (event: SelectChangeEvent) => {
        dispatch(headerhActions.serCurreny(event.target.value as string));
    };

    const signIn = () => {
        let port = window.location.port ? ':' + window.location.port : '';
        window.location.href = '//' + window.location.hostname + port + '/private';
    }

    return (
        <header>
            <DrawerIndex />
            <div className="d-flex justify-content-between align-items-center header-container">
                <div className="logo">
                    <div className="ram">
                        <a href='/'><img src={image[0]} alt="" /></a>
                    </div>
                    <div className="hl" />
                    <div className="one-world">
                        <img src={image[1]} alt="" />
                    </div>
                    <div className='select'>
                        <Select
                            className={classes.root}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            label="currency"
                            size="small"
                            onChange={handleChangeCurrency}
                        >
                            <MenuItem value={"MAD"}><span className='currency'>MAD</span></MenuItem>
                            <MenuItem value={"EUR"}><span className='currency'>EURO</span></MenuItem>
                        </Select>
                    </div>
                </div>
                <ul className="menu-large-device">

                    <li onClick={()=>props.scroll()}>
                        Comment ça fonctionne ?
                    </li>
                    <li>
                        FAQ
                    </li>
                    <li>
                        {!isAuthenticated ?
                            <button onClick={signIn} className='btn btn-sign-in'>
                                <i><BiUserCircle /></i><span>Connexion</span>
                            </button>
                            :
                            <span>wahid<i><FaUserAlt /></i></span>

                        }
                    </li>
                </ul>
                <ul className="menu-small-device ">
                    <li>
                        {!isAuthenticated ?
                            null
                            :
                            <span>wahid<i><FaUserAlt /></i></span>

                        }
                    </li>
                    <li className="menu-icon">
                        <IconButton onClick={onClickDrawer} aria-label="delete">
                            <FiMenu />
                        </IconButton>
                    </li>

                </ul>
            </div>
        </header>
    );
}
export default HeaderInder