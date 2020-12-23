import React from "react";
import {Grid} from "@material-ui/core"
import EmailIcon from "@material-ui/icons/Email"
import GithubIcon from "@material-ui/icons/Github"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

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
                    <GithubIcon className="social-icon"/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.linkedin.com/in/angelina-shalupova-84101415a">
                    <LinkedInIcon className="social-icon"/>
                </a>
            </Grid>
            <Grid item>
                <a href="mailto:shalupova.a@northeastern.edu">
                    <EmailIcon className="social-icon"/>
                </a>
            </Grid>
        </Grid>
        <br/>
        <br/>
    </div>

export default SocialsComponent