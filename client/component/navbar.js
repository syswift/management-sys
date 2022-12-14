import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Router from 'next/router';
import axios from 'axios';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Image from 'next/image';
import * as React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import LoopIcon from '@material-ui/icons/Loop';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import WorkIcon from '@material-ui/icons/Work';
import ListIcon from '@material-ui/icons/List';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

import windowsData from '../globalData'
import { render } from 'react-dom';

import TreeItem from '@material-ui/lab/TreeItem';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { display } from '@mui/system';

// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: windowsData.drawerWidth,
      width: `calc(100% - ${windowsData.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: windowsData.drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: windowsData.drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(9) + 1,
      [theme.breakpoints.up('sm')]: {
        width: 0,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const Navbar =({currentUser})=>{
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        windowsData.drawerWidth=240;
        setOpen(true);
        Router.push(windowsData.pathDataShow);
    };

    const handleDrawerClose = () => {
        windowsData.drawerWidth=0;
        setOpen(false);
        Router.push(windowsData.pathDataShow);
    };
    const openManagement = () =>{
        Router.push('./trans');
    };

    const signoutFunc = async () => {
        await axios.post('/api/auth/signout');
        Router.push('/');
    }

    const showpath = () => {
        try
        {
            console.log(Router.pathname);
            windowsData.pathDataShow=Router.pathname;
            return Router.pathname;
        }
        catch{
            return '/';
        }
    }

        return (
            <div className={classes.root}>
                <AppBar position="fixed" className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                })}>
                    <Toolbar>
                        <IconButton color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                            })}>
                            <MenuIcon/>
                        </IconButton>
                        <Image
                            src="/logo.png"
                            alt="logo" 
                            width={40} 
                            height={40}
                            onClick={()=>{Router.push('/')}}/>
                        <div id="pathname" style={{marginLeft:20,flexGrow:1}}>{showpath()}</div>
                        {!currentUser
                        ? <Button color="inherit" onClick={()=>{Router.push('/auth/loginPage')}}>??????</Button>
                        : <div/>
                        }
                        {!currentUser
                        ? <Button color="inherit" onClick={()=>{Router.push('/auth/signupPage')}}>??????</Button>
                        : <div/>
                        }
                        {currentUser
                        ? <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        : <div/>
                        }
                        {currentUser
                        ? <Button color="inherit" onClick={signoutFunc}>??????</Button>
                        : <div/>
                        }
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    })}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}>
                    <div className={classes.toolbar}>
                      <IconButton onClick={handleDrawerClose}>
                          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                      </IconButton>
                    </div>
                    <Divider />
                    <TreeView
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                      multiSelect>
                      <TreeItem nodeId="1" label="?????????" button onClick={()=>{Router.push('/')}} icon={<HomeIcon color="primary"/>} style={{minHeight:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      <TreeItem nodeId="2" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="3" label="????????????" button onClick={()=>{Router.push('/customerInformation')}} icon={<SettingsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="4" label="???????????????" button onClick={()=>{Router.push('/supplierInformation')}} icon={<SettingsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="5" label="??????????????????" button onClick={()=>{Router.push('/')}} icon={<SettingsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="6" label="???????????????" button onClick={()=>{Router.push('/')}} icon={<SettingsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="7" label="????????????" button onClick={()=>{Router.push('/')}} icon={<SettingsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="8" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="9" label="???????????????" button onClick={()=>{Router.push('/trans')}} icon={<LoopIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="10" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="11" label="???????????????" button onClick={()=>{Router.push('/')}} icon={<LoopIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="12" label="????????????" button onClick={()=>{Router.push('/inventorySearch')}} icon={<LoopIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="13" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="14" label="????????????1" button onClick={()=>{Router.push('/')}} icon={<AssessmentIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="15" label="????????????2" button onClick={()=>{Router.push('/')}} icon={<AssessmentIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="16" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="17" label="????????????" button onClick={()=>{Router.push('/gongdan')}} icon={<WorkIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="18" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="19" label="????????????1" button onClick={()=>{Router.push('/')}} icon={<ListIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="20" label="????????????2" button onClick={()=>{Router.push('/')}} icon={<ListIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                      <TreeItem nodeId="21" label="????????????" style={{minHeight:'56px',paddingLeft: '16px',alignItem:'center'}}>
                        <TreeItem nodeId="22" label="????????????1" button onClick={()=>{Router.push('/')}} icon={<DesktopWindowsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                        <TreeItem nodeId="23" label="????????????2" button onClick={()=>{Router.push('/')}} icon={<DesktopWindowsIcon color="primary"/>} style={{height:'56px',paddingLeft: '16px',display:'flex',alignItem:'center'}}/>
                      </TreeItem>
                    </TreeView>
                </Drawer>
            </div>
        );
}

export default Navbar;
