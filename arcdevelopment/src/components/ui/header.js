import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button } from '@material-ui/core';
import { Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import {Link} from 'react-router-dom';

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
    }
}))

export default function Header(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e, value) => {
        setValue(value);
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        }

    })
    return (
        <React.Fragment>

            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img alt="BVS_logo" className={classes.logo} src={logo} />
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
                            label="Photo" 
                            />
                            <Tab className={classes.tab} 
                            component={Link}
                            to="/videos"
                            label="Video" 
                            />
                            <Tab className={classes.tab} 
                            component={Link}
                            to="/drawings"
                            label="Drawing" 
                            />
                        </Tabs>

                            <Button className={classes.button} variant="contained" 
                                    color="secondary" 
                                    label="Contact">
                                Contact
                            </Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
            <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )
}
