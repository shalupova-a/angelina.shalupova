import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Divider } from '@mui/material';

import Socials from './socials';

const Landing = () =>
    <Grid container
        sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
        <Grid>
            <Divider orientation="vertical" className="divider" />
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

export default Landing