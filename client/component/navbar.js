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

import drawerWidth from '../globalData'
import { render } from 'react-dom';

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
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
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
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
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
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
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
        drawerWidth=240;
        setOpen(true);
    };

    const handleDrawerClose = () => {
        drawerWidth=theme.spacing(9) + 1;
        setOpen(false);
    };


    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //   setAnchorEl(event.currentTarget);
    // };
    
    // const handleClose = () => {
    //   setAnchorEl(null);
    // };
  

    const openManagement = () =>{
        Router.push('./1');
    };

    const signoutFunc = async () => {
        await axios.post('/api/auth/signout');
        Router.push('/');
    }

    const showpath = () => {
        try
        {
            console.log(Router.pathname);
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
                        ? <Button color="inherit" onClick={()=>{Router.push('/auth/loginPage')}}>登录</Button>
                        : <div/>
                        }
                        {!currentUser
                        ? <Button color="inherit" onClick={()=>{Router.push('/auth/signupPage')}}>注册</Button>
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
                        ? <Button color="inherit" onClick={signoutFunc}>登出</Button>
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
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
                        <ListItemText primary='主页/工作台' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><SettingsIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='基础配置' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/trans')}}>
                        <ListItemIcon><LoopIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='周转管理' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><AssessmentIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='库存管理' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><MonetizationOnIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='结算管理' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><WorkIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='工单管理' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><ListIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='报表管理' />
                        </ListItem>
                    </List>
                    <List>
                    <ListItem button onClick={()=>{Router.push('/')}}>
                        <ListItemIcon><DesktopWindowsIcon color="primary"/></ListItemIcon>
                        <ListItemText primary='系统管理' />
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        );
}

export default Navbar;
