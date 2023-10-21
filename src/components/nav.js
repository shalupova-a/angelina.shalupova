import { Link } from 'react-scroll'
import React from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

const Nav = () => {
    return <AppBar sx={{backgroundColor: '#fff7e8'}} elevation={0} position="sticky">
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
}

export default Nav;