import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from 'react-scroll'
import React from "react"
const Nav = () =>
    <AppBar className="nav" position="sticky" elevation={0}>
        <Toolbar>
            <div style={{ marginLeft: 'auto' }}>
                <Link to="about">
                    <Button className="button nav-button" size="large">
                        about
                    </Button>
                </Link>
                <Link to="projects">
                    <Button className="button nav-button" size="large">
                        projects
                    </Button>
                </Link>
            </div>
        </Toolbar>
    </AppBar>

export default Nav