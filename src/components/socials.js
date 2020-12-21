import React from "react";
import {Grid} from "@material-ui/core"
import Email from "@material-ui/icons/Email"
import Github from "@material-ui/icons/Github"
import LinkedIn from "@material-ui/icons/LinkedIn"

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
                    <Github className="social-icon"/>
                </a>
            </Grid>
            <Grid item>
                <a href="https://www.linkedin.com/in/angelina-shalupova-84101415a">
                    <LinkedIn className="social-icon"/>
                </a>
            </Grid>
            <Grid item>
                <a href="mailto:shalupova.a@northeastern.edu">
                    <Email className="social-icon"/>
                </a>
            </Grid>
        </Grid>
        <br/>
        <br/>
    </div>

export default SocialsComponent