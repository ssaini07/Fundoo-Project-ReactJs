import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import light from '../../assets/light.png'
import appointmentreminders from '../../assets/appointment-reminders.png'
import edit from '../../assets/edit.png'
import downloads from '../../assets/downloads.png';
import trash from '../../assets//trash.png';
import ListItem from '@mui/material/ListItem';
import {connect} from 'react-redux';

import './drawerDemo.css'

const drawerWidth = 240;

const margin = 70;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: margin,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

function MiniDrawer(props) {
    const theme = useTheme();
    
    const noteChoice = (typeOfNote) => {
        props.dispatch({type : `${typeOfNote}`})
        props.listenToSideNavBar(typeOfNote)
    }

    return (

        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawerOpen}>
                <List >
                    <ListItem button onClick={()=>noteChoice('notes')}>
                        <ListItemIcon>
                            <img src={light} style={{ width: "20px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Notes" />
                    </ListItem>

                    <ListItem button onClick={()=>noteChoice('reminders')}>
                        <ListItemIcon>
                            <img src={appointmentreminders} style={{ width: "20px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Reminders" />
                    </ListItem>

                    <ListItem button onClick={()=>noteChoice('edit')}>
                        <ListItemIcon>
                            <img src={edit} style={{ width: "20px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Edit labels" />
                    </ListItem>

                    <ListItem button onClick={()=>noteChoice('archive')}>
                        <ListItemIcon>
                            <img src={downloads} style={{ width: "20px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Archive" />
                    </ListItem>

                    <ListItem button onClick={()=>noteChoice('bin')}>
                        <ListItemIcon>
                            <img src={trash} style={{ width: "20px" }} />
                        </ListItemIcon>
                        <ListItemText primary="Bin" />
                    </ListItem>

                </List>

            </Drawer>

        </Box>
    );
}

export default connect()(MiniDrawer);