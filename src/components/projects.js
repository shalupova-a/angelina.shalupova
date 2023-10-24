import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Card, CardContent, CardActions, IconButton, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { COLORS } from "../utils/colors";

const CardItem = (props) =>
    <Card sx={{
        backgroundColor: COLORS.lightBeigeTheme
    }}>
        <CardContent>
            <Typography sx={{ color: COLORS.blueTheme }} variant="h5">{props.title}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.language}
            </Typography>
            <Typography variant="body2">
                {props.body}
            </Typography>
        </CardContent>
        <CardActions><IconButton href={props.link}>
            <FontAwesomeIcon icon={faGithub} />
        </IconButton></CardActions>
    </Card>

const Projects = () =>
    <div id="projects"
        data-sal="fade"
        data-sal-duration="1000" // changes duration of the animation (from 200 to 2000 ms)
        data-sal-delay="50" // adds delay to the animation (from 5 to 1000 ms)
        data-sal-easing="ease" // sets easing for the animation (see easings.net for reference) 
        data-sal-once={false}
    >
        <Grid container sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
            <Grid align="left" item xs={6}>
                <p className="title">projects</p>
            </Grid>
            <Grid container xs={12} sm={6} spacing={3}>
                <Grid item xs={12} sm={6}>
                    <CardItem title={"Personal Website"} language={"GatsbyJS, MaterialUI, React, HTML/CSS, JS"} body={"You're looking at it! For this project, my goals were to create a simple, one-page website that is both\n" +
                        "desktop and mobile-friendly (WIP)."} link={"https://github.com/shalupova-a/angelina.shalupova"} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardItem title={"Corvus"} language={"HTML/CSS, JS, ReactJS, Redux, Java, Bootstrap"} body={"This project started as a group effort for CS4550 - Web Development.\n" +
                        "This website recommends songs based on one's astrological sun sign!"} link={"https://github.com/shalupova-a/corvus"} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <CardItem title={"Snarl"} language={"Java"} body={"This project was a group effort for CS4500 - Software Development. This is a server-client 2D dungeon crawler game!"} link={"https://github.com/shalupova-a/Snarl"} />
                </Grid>
            </Grid>
        </Grid>
    </div>

export default Projects