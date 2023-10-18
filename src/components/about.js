import React from "react";
import Reveal from './animation/reveal';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const About = () =>
    <div id="about">
        <Reveal>
            <Grid container
                sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
                <Grid align="left" item xs={6}>
                    <p className="title">about me</p>
                </Grid>
                <Grid item xs={6}>
                    <p>I’m currently a software developer at <a href={"https://www.bitgo.com/"}>BitGo</a> in Palo Alto and a recent grad from <a href={"https://www.khoury.northeastern.edu"}> Khoury College of Computer Sciences </a>at <a href={"https://northeastern.edu"}>Northeastern University</a>. </p>

                    <p>Thanks to my professional experience and my Bachelor of Science in C.S., I’ve developed a knack for creating robust, user-friendly products and seeing them through the entire product development life cycle.</p>

                    <p>When I'm not busy coding, you’ll find me experimenting with analog photography, skiing my way down snow-covered slopes, or lost in the pages of a good novel.
                    </p>
                </Grid>
            </Grid>
        </Reveal>
    </div >

export default About