import React from "react"
import './index.css'
import AboutComponent from "../components/about"
import {Container, Grid} from "@material-ui/core"
import MeComponent from "../components/me";
import SocialsComponent from "../components/socials";
import ProjectsComponent from "../components/projects";

export default function Home() {
  return <Container fixed id="home">
    <br/>
    <Grid
        container
        spacing={5}
    >
      <Grid
          container
          item
          justify="space-evenly"
          alignItems="center"
          spacing={7}>
          <Grid item lg align="center">
            <MeComponent/>
          </Grid>
          <Grid item lg align="center">
            <p className="tagline">hello! i'm angelina—
              student and aspiring developer.</p>
            <SocialsComponent/>
          </Grid>
      </Grid>
      <Grid
        container
        item
        justify="space-evenly" spacing={7}>
        <Grid item lg align="center">
          <p className="title">about me</p>
        </Grid>
        <Grid item lg align="center">
          <AboutComponent/>
        </Grid>
      </Grid>
    </Grid>
    <Grid
      container
      item
      justify="space-evenly"
      alignItems="center"
      spacing={7}>
      <Grid item lg align="center">
        <p className={"title"}>projects</p>
      </Grid>
      <Grid item lg align="center">
        <ProjectsComponent/>
      </Grid>
    </Grid>
  </Container>
}
