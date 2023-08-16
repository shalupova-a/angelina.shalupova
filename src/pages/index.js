import React from "react"
import './index.css'
import About from "../components/about"
import {Container, Grid} from "@mui/material"
import Socials from "../components/socials";
import Projects from "../components/projects";

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
          <Grid item lg align="left">
            <p className="tagline">hello! i'm angelina—
              student and aspiring developer.</p>
            <Socials/>
          </Grid>
      </Grid>
      <Grid
        container
        item
        justify="space-evenly" spacing={7}>
        <Grid item lg align="center">
          <p className="title">about me</p>
        </Grid>
        <Grid item lg align="left">
          <About/>
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
      <Grid item lg align="left">
        <Projects/>
      </Grid>
    </Grid>
  </Container>
}
