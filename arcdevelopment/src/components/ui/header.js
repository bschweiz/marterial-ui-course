import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

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
    }
}))

export default function Header(props) {
    const classes = useStyles()

    return (
        <React.Fragment>

            <ElevationScroll>
                <AppBar position="fixed">
                    <Toolbar >
                        <img alt="BVS_logo" src={logo} />
                        <Typography variant="h4">
                            BSCHWEIZ
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            
            <div className={classes.toolbarMargin} />
        
        </React.Fragment>
    )
}
