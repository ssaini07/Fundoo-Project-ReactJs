import React, { useState } from 'react'
import './header.css'
import googlekeeplimage from '../../assets/googlekeepimage.png'
// import { CgMenu } from "react-icons/cg";
import { CgSearch } from "react-icons/cg";
// import { MdRefresh } from "react-icons/md";
// import { TiThMenuOutline } from "react-icons/ti";
// import { IoMdSettings } from "react-icons/io";
// import { CgMenuGridO } from "react-icons/cg";
// import { DiJavascript } from "react-icons/di";
import MiniDrawer from '../Drawer/drawerDemo';

import Box from '@mui/material/Box';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@material-ui/styles';
import { width } from '@mui/system';
import { connect } from 'react-redux';


function Header(props) {

    const openDrawer = () => {
        props.listenToHeader()
    }

    return (
        <>
            <Box className='sectionHeader'>

                <Box className='headerSectionOne'>
                    <Box><MenuIcon onClick={openDrawer} fontSize="medium" style={{ cursor: 'pointer' }} /></Box>
                    <Box><img src={googlekeeplimage} className='googlekeepimage' alt="img" /></Box>
                    <Box><h3 class='keepTextItem'>{props.title}</h3></Box>
                </Box>

                <Box className='headerSectionTwo'>
                    <div class='searchBox'>
                        <button type="submit" class='searchButton'>
                            <SearchIcon htmlColor="grey" />
                        </button>
                        <input type="text" class='searchField' placeholder="Search" />
                    </div>
                </Box>

                <Box className='headerSectionThree'>
                    <Box><RefreshIcon htmlColor="grey" style={{ cursor: 'pointer' }} /></Box>
                    <Box><ViewAgendaOutlinedIcon className='ViewAgendaOutlinedIcon' htmlColor="grey" style={{ cursor: 'pointer' }} /></Box>
                    <Box> <SettingsIcon htmlColor="grey" style={{ cursor: 'pointer' }} /></Box>
                </Box>

                <Box className='headerSectionFour'>
                    <Box><AppsIcon htmlColor="grey" fontSize="medium" /></Box>
                    <Box><AccountCircleIcon htmlColor="grey" fontSize="medium" /></Box>
                </Box>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        title: state.drawerReducer.title,
    };
};
export default connect(mapStateToProps)(Header);