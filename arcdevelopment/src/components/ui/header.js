import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import { Menu, MenuItem } from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'

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
        height: "4em",
        borderRadius: "3rem",
        margin: ".5rem",
        [theme.breakpoints.down("md")]: {
            height: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "2.5em"
        },
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
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

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

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpen(false)
        setSelectedIndex(i)
    }

    const menuOptions = [
        {name: "All Drawings", link: "/drawings"},
        {name: "Studio Work", link: "/studio"},
        {name: "Sketches", link: "/sketches"},
    ]   

    useEffect(() => {

        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;
            case "/photos":
                if (value !== 1) {
                    setValue(1)
                }
                break;
            case "/videos":
                if (value !== 2) {
                    setValue(2)
                }
                break;
            case "/drawings":
                if (value !== 3) {
                    setValue(3)
                    setSelectedIndex(0)
                }
                break;
            case "/studio":
                if (value !== 3) {
                    setValue(3)
                    setSelectedIndex(1)
                }
                break;
            case "/sketches":
                if (value !== 3) {
                    setValue(3)
                    setSelectedIndex(2)
                }
                break;
            case "/contact":
                if (value !== 4) {
                    setValue(4)
                }
                break;
            default:
                break
        }

    }, [value])

    const tabs = (
        <React.Fragment>
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
                            {menuOptions.map((option, index) => (
                                <MenuItem
                                    key={option}
                                    component={Link}
                                    to={option.link}
                                    classes={{root: classes.menuItem}}
                                    onClick={(event) => {
                                        handleMenuItemClick(event, index)
                                        setValue(3)
                                        handleClose()
                                    }}
                                    selected={index === selectedIndex && value === 3} 
                                >
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Menu>
        </React.Fragment>
    )

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
                        { matches ? null : tabs }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>

            <div className={classes.toolbarMargin} />

        </React.Fragment>
    )
}
