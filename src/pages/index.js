import React from "react"
import './index.css'
import About from "../components/about"
import { Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Socials from "../components/socials";
import Projects from "../components/projects";
import Nav from "../components/nav";

export default function Home() {
  return (
    <Container>
      <Nav/ >
      <Grid
        container
        item
        spacing={3}
        sp
      >
        <Grid item align="left">
          <p className="tagline">hello there! i'm angelina</p>
          <Socials />
        </Grid>
      </Grid>
      <Grid
        container
        item
        justify="space-evenly" spacing={3}>
        <Grid item>
          <p className="title">about me</p>
        </Grid>
        <Grid item>
          <About />
        </Grid>
      </Grid>
      <Grid
        container
        item
        justify="space-evenly"
        alignItems="center"
        spacing={3}>
        <Grid item>
          <p className={"title"}>projects</p>
        </Grid>
        <Grid item align="left">
          <Projects />
        </Grid>
      </Grid>
    </Container>);
}
