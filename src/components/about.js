import React from "react";
import {Typography} from "@material-ui/core";
import SocialsComponent from "./socials";

const AboutComponent = () =>
    <div id="about">
        <p className="title">about me</p>
        <p>Welcome :-) My pronouns are she/her/hers, and I'm an undergrad, 4th year student at <a href="https://northeastern.edu">Northeastern University</a> majoring in computer science and minoring in math.
        Currently, I'm on co-op at <a href="https://starry.com">Starry Inc.</a> as a Internet Firmware Validation Engineer.
        When I'm not coding, you can find me trying out new plant-based recipes, skiing (if weather permits), or learning to knit!
        </p>
            <p>I'm passionate about: sustainability, inclusion, knowledge sharing, and building meaningful connections!</p>
            <p>I am currently on the search for my third co-op/internship (summer/fall 2021),
                where I hope to gain professional software developing experience. Feel free to reach out if you think
                I'd be a good fit for a position!</p>
    </div>

export default AboutComponent