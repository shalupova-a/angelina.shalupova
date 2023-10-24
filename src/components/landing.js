import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider } from '@mui/material';
import { StyledDividerTheme } from './themes/StyledDividerTheme';
import { ThemeProvider } from '@mui/material/styles';
import Socials from './socials';

const Landing = () =>
    <div data-sal="fade"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
        data-sal-once={false}
    >
        <ThemeProvider theme={StyledDividerTheme}>
            <Grid container
                sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
                <Grid>
                    <Divider orientation="vertical" />
                </Grid>
                <Grid>
                    <Grid align="left">
                        <Grid>
                            <p className="tagline">Hello there! I'm Angelina</p>
                        </Grid>
                    </Grid>
                    <Grid align="left" xs={6}>
                        <p>I’m a full-stack developer based in the Bay Area and recent alum of Northeastern University. Let’s connect!</p>
                    </Grid>
                    <Grid align="left" xs={7}>
                        <Socials />
                    </Grid>

                </Grid>
            </Grid>
        </ThemeProvider>
    </div>

export default Landing