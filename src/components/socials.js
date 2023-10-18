import React from "react";
import {Grid} from "@mui/material"
import {FaGithub, FaLinkedin, FaEnvelope, FaFileAlt} from "react-icons/fa"

const Socials = () =>
    <div id="socials">
        <Grid
            container
            item
            justify="space-evenly"
            align="right"
            spacing={4}>
            <Grid item>
                <a href="https://github.com/shalupova-a">
                    <FaGithub className="social-icon" size={25}/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.linkedin.com/in/angelina-shalupova-84101415a">
                    <FaLinkedin className="social-icon" size={25}/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://ashalupova-resume.tiiny.site">
                    <FaFileAlt size={25} />
                </a>
            </Grid>
            <Grid item>
                <a href="mailto:a.shalupova@gmail.com">
                    <FaEnvelope className="social-icon" size={25}/>
                </a>
            </Grid>
        </Grid>
        <br/>
        <br/>
    </div>

export default Socials