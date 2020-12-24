import React from "react";
import {Grid} from "@material-ui/core"
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa"

const SocialsComponent = () =>
    <div id="socials">
        <p className="subtitle">connect with me!</p>
        <Grid
            container
            item
            justify="space-evenly"
            alignItems="flex-start">
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
                <a href="mailto:shalupova.a@northeastern.edu">
                    <FaEnvelope className="social-icon" size={25}/>
                </a>
            </Grid>
        </Grid>
        <br/>
        <br/>
    </div>

export default SocialsComponent