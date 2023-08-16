import { AppBar, Button, Toolbar } from "@mui/material";
import React from "react"
const Nav = () =>
    <AppBar position="sticky" color="transparent" elevation={0}>
        <Toolbar>
            <Button className="button" size="large">
                home
            </Button>
            <div style={{ marginLeft: 'auto' }}>
                <Button className="button" size="large">
                    about
                </Button>
                <Button className="button" size="large">
                    projects
                </Button>
            </div>
        </Toolbar>
    </AppBar>

export default Nav