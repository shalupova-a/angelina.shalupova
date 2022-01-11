import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {Grid, Card, CardContent, CardActions, IconButton, Button, Typography} from "@material-ui/core"

const ProjectsComponent = () =>
    <div id="projects">
        <p className="title">personal projects</p>
        <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-start"
            spacing={2}>
            <Grid item lg align="center">
                <Card style={{width: '18rem', background: "transparent"}}>
                    <CardContent align="left">
                        <Typography variant="h5">Personal website</Typography>
                        <Typography className="mb-2 text-muted">GatsbyJS, MaterialUI, HTML/CSS, JS</Typography>
                        <Typography variant="body1">
                            You're looking at it! For this project, my goals were to create a simple, one-page website that is both
                            desktop and mobile-friendly.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton href="https://github.com/shalupova-a/angelina.shalupova">
                            <FontAwesomeIcon icon={faGithub} color="black"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg align="center">
                <Card style={{width: '18rem', background: "transparent"}}>
                    <CardContent align="left">
                        <Typography variant="h5">Corvus</Typography>
                        <Typography className="mb-2 text-muted">HTML/CSS, JS, ReactJS, Redux, Java, Bootstrap</Typography>
                        <Typography variant="body2">
                            This project started as a group effort for CS4550 - Web Development, and I have been working independently to improve it.
                            Combining my love for astrology and music, this website recommends songs based on one's astrological sun sign!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton href="">
                            <FontAwesomeIcon icon={faGithub} color="black"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item lg align="center">
                <Card style={{width: '18rem', background: "transparent"}}>
                    <CardContent align="left">
                        <Typography variant="h5">Sudoku</Typography>
                        <Typography className="mb-2 text-muted">C#</Typography>
                        <Typography variant="body1">
                            Sudoku game written in C#. Allows various levels of difficulty.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton href="https://github.com/shalupova-a/SudokoGame">
                            <FontAwesomeIcon icon={faGithub} color="black"/>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    </div>

export default ProjectsComponent