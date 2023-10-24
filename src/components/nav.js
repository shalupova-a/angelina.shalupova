import { Link } from 'react-scroll'
import React from "react"
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { StyledButtonTheme } from './themes/StyledButtonTheme';
import { ThemeProvider } from '@mui/material/styles';
import { COLORS } from '../utils/colors';

const Nav = () => {
    return <div data-sal="fade"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference) 
        data-sal-once={true}
    >
        <ThemeProvider theme={StyledButtonTheme}>
            <AppBar sx={{ backgroundColor: COLORS.beigeTheme }} elevation={0} position="fixed">
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
    </div>
}

export default Nav;