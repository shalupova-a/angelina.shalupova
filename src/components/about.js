import React from "react";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

const About = () =>
    <div id="about"
        data-sal="fade"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference) 
        data-sal-once={false}

    >
        <Grid container
            sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
            <Grid align="left" item xs={10} sm={6}>
                <p className="title">about me</p>
            </Grid>
            <Grid item xs={12} sm={6}>
                <p>I’m currently a software developer at <a href={"https://www.bitgo.com/"}>BitGo</a> in Palo Alto and a recent grad from <a href={"https://www.khoury.northeastern.edu"}> Khoury College of Computer Sciences </a>at <a href={"https://northeastern.edu"}>Northeastern University</a>. </p>

                <p>Thanks to my professional experience and my Bachelor of Science in C.S., I’ve developed a knack for creating robust, user-friendly products and seeing them through the entire product development life cycle.</p>

                <p>When I'm not busy coding, you’ll find me experimenting with analog photography, skiing my way down snow-covered slopes, or lost in the pages of a good novel.
                </p>
            </Grid>
        </Grid>
    </div >

export default About