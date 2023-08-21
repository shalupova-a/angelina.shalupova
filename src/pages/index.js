import React from "react"
import './index.css'
import About from "../components/about"
import { Container } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Projects from "../components/projects";
import Nav from "../components/nav";
import Landing from "../components/landing";

export default function Home() {
  return (
    <Container>
      <Nav />
      <Landing />
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
    </Container >);
}
