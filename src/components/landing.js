import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import Socials from './socials';

const Landing = () =>

    <Grid
        container
        item
        sp
        sx={{ marginTop: '5%' }}
    >
        <Grid item align="left">
            <p className="tagline">Hello there! I'm Angelina</p>
        </Grid>
        <Grid item align="left" xs={6}>
            <p>I’m a full-stack developer based in the Bay Area and recent alum of Northeastern University. Let’s connect!</p>
        </Grid>
        <Grid item align="left" xs={7}>
            <Socials />
        </Grid>

    </Grid>

export default Landing