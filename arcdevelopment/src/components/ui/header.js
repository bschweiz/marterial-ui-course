import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core'

import logo from '../../assets/BVSLogo.png'

function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar
    },
    logo: {
        height: "3em",
        borderRadius: "3rem",
        padding: ".5rem"
    },
    logoContainer: {
        padding: 0,
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minwidth: 10,
    },
    button: {
        backgroundColor: "primary",
        color: "white",
        textTransform: "None",
        borderRadius: "2rem"
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e, value) => {
        setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0);
        } else if (window.location.pathname === "/photos" && value !==
            1) {
            setValue(1);
        } else if (window.location.pathname === "/videos" && value !==
            2) {
            setValue(2);
        } else if (window.location.pathname === "/drawings" && value !==
            3) {
            setValue(3);
        } else if (window.location.pathname === "/contact" && value !==
            4) {
            setValue(4);
        }
    }, [value])
    return (
        <React.Fragment>

            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            to="/"
                            disableRipple
                            onClick={() => setValue(0)}
                            className={classes.logoContainer}
                        >
                            <img alt="BVS_logo" className={classes.logo} src={logo} />
                        </Button>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabContainer}
                        >
                            <Tab className={classes.tab}
                                component={Link}
                                to="/"
                                label="Home"
                            />
                            <Tab className={classes.tab}
                                component={Link}
                                to="/photos"
                                label="Photography"
                            />
                            <Tab className={classes.tab}
                                component={Link}
                                to="/videos"
                                label="Video"
                            />
                            <Tab aria-owns={anchorEl ? "simple-menu" : undefined}
                                aria-haspopup={anchorEl ? "true" : undefined}
                                className={classes.tab}
                                component={Link}
                                onMouseOver={event => handleClick(event)}
                                to="/drawings"
                                label="Drawing"
                            />
                        </Tabs>

                        <Button className={classes.button} variant="contained"
                            color="secondary"
                            label="Contact">
                            Contact
                        </Button>

                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            classes={{paper: classes.menu}}
                            MenuListProps={{onMouseLeave: handleClose}}
                            elevation={0}
                        >
                            <MenuItem 
                                onClick={() => {handleClose(); setValue(3)}}
                                component={Link} 
                                to="/drawings"
                                classes={{root: classes.menuItem}}   
                            >
                                All Drawings</MenuItem>
                            <MenuItem 
                                onClick={() => {handleClose(); setValue(3)}}
                                component={Link} 
                                to="/studio"   
                                classes={{root: classes.menuItem}}   
                            >
                                Studio Work</MenuItem>
                            <MenuItem onClick={() => {handleClose(); setValue(3)}}
                                component={Link} 
                                to="/sketches"
                                classes={{root: classes.menuItem}}      
                            >
                                Sketches</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <div className={classes.toolbarMargin} />

        </React.Fragment>
    )
}
