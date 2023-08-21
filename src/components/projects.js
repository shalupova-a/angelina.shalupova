import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconButton, Typography, Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { ExpandMore } from "@mui/icons-material";
import Reveal from './animation/reveal';

const AccordionItem = (props) =>
    <Accordion style={{ backgroundColor: "#f7fcff", width: '85%' }}>
        <AccordionSummary
            expandIcon={<ExpandMore />}
        >
            <Typography>{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails align="left" style={{
            display: "flex",
            flexDirection: "column"
        }}>
            <Typography variant={"subtitle2"}>
                {props.language}
                <IconButton href={props.link}>
                    <FontAwesomeIcon icon={faGithub} />
                </IconButton>
            </Typography>
            <Typography>
                {props.body}
            </Typography>
        </AccordionDetails>
    </Accordion>

const Projects = () =>
    <div id="projects">
        <Reveal>
            <AccordionItem title={"personal website"} language={"GatsbyJS, MaterialUI, HTML/CSS, JS"} body={"You're looking at it! For this project, my goals were to create a simple, one-page website that is both\n" +
                "desktop and mobile-friendly (WIP)."} link={"https://github.com/shalupova-a/angelina.shalupova"} />
            <AccordionItem title={"corvus web app"} language={"HTML/CSS, JS, ReactJS, Redux, Java, Bootstrap"} body={"This project started as a group effort for CS4550 - Web Development, and I have been working independently to improve it.\n" +
                "Combining my love for astrology and music, this website recommends songs based on one's astrological sun sign!"} link={"https://github.com/shalupova-a/corvus"} />
            <AccordionItem title={"snarl game"} language={"Java"} body={"This project was a group effort for CS4500 - Software Development. This is a server-client 2D dungeon crawler game!"} link={"https://github.com/shalupova-a/Snarl"} />
        </Reveal>
    </div>

export default Projects