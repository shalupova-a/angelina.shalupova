import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider } from '@mui/material';
import { StyledDividerTheme } from './themes/StyledDividerTheme';
import { ThemeProvider } from '@mui/material/styles';
import Reveal from './animation/reveal';
import Socials from './socials';

const Landing = () =>
    <ThemeProvider theme={StyledDividerTheme}>
        <Grid container
            sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
            <Grid>
                <Divider orientation="vertical" />
            </Grid>
            <Grid>
                <Grid align="left">
                    <Grid>
                        <Reveal>
                            <p className="tagline">Hello there! I'm Angelina</p>
                        </Reveal>
                    </Grid>
                </Grid>
                <Grid align="left" xs={6}>
                    <Reveal>
                        <p>I’m a full-stack developer based in the Bay Area and recent alum of Northeastern University. Let’s connect!</p>
                    </Reveal>
                </Grid>
                <Grid align="left" xs={7}>
                    <Reveal>
                        <Socials />
                    </Reveal>
                </Grid>

            </Grid>
        </Grid>
    </ThemeProvider>

export default Landing