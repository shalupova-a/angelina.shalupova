import { Link } from 'react-scroll'
import React from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { StyledButtonTheme } from './themes/StyledButtonTheme';
import { ThemeProvider } from '@mui/material/styles';
import { COLORS } from '../utils/colors';

const Nav = () => {
    return <ThemeProvider theme={StyledButtonTheme}>
        <AppBar sx={{ backgroundColor: COLORS.beigeTheme }} elevation={0} position="sticky">
            <Toolbar>
                <div style={{ marginLeft: 'auto' }}>
                    <Link to="about">
                        <Button size="large">
                            about
                        </Button>
                    </Link>
                    <Link to="projects">
                        <Button size="large">
                            projects
                        </Button>
                    </Link>
                </div>
            </Toolbar>
        </AppBar>
    </ThemeProvider>
}

export default Nav;