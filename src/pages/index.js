import React from "react"
import { StyledEngineProvider } from '@mui/material/styles'
import './index.css'
import { Container } from "@mui/material"
import About from "../components/about"
import Projects from "../components/projects";
import Nav from "../components/nav";
import Landing from "../components/landing";

export default function Home() {
  return (
    <StyledEngineProvider injectFirst>

      <Container>
        <Nav />
        <Landing />
        <About />
        <Projects />
      </Container >
    </StyledEngineProvider>);
}
