import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {AppBar, Toolbar, Typography, Button, useScrollTrigger, Slide, PropTypes, CssBaseline} from "@material-ui/core";
import { Link, animateScroll as scroll } from "react-scroll";


export default function NavBarComponent() {
    return (
        <div>
            <AppBar class="nav" position="static" color="transparent">
                <Toolbar>
                    <Typography class="nav-title">
                        angelina shalupova
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
