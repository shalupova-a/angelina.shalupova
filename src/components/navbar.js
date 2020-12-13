import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {AppBar, Toolbar, Typography} from "@material-ui/core";


export default function NavBarComponent() {
    return (
        <div>
            <AppBar className="nav" position="static" color="transparent">
                <Toolbar>
                    <Typography className="nav-title">
                        angelina shalupova
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
