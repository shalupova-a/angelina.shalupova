import React from "react"
import './index.css'
import ProjectsComponent from "../components/projects"
import AboutComponent from "../components/about"
import NavBarComponent from "../components/navbar";
import {Container, Grid} from "@material-ui/core"
import MeComponent from "../components/me";
import SkillsComponent from "../components/skills";
import SocialsComponent from "../components/socials";

export default function Home() {
  return <Container fixed id="home">
    <NavBarComponent/>
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
          <Grid item lg align="right">
            <MeComponent/>
          </Grid>
          <Grid item lg align="left">
            <p class="tagline">hello! i'm angelina—
              student and aspiring developer.</p>
          </Grid>
      </Grid>
      <Grid
        container
        item
        justify="space-evenly" spacing={7}>
        <Grid item lg align="right">
          <SkillsComponent/>
          <br/>
          <SocialsComponent/>
        </Grid>
        <Grid item lg align="left">
          <AboutComponent/>
        </Grid>
      </Grid>
    </Grid>
    {/*<ProjectsComponent/>*/}
  </Container>
}
