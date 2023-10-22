import React from "react"
import './index.css'
import { Container } from "@mui/material"
import About from "../components/about"
import Projects from "../components/projects";
import Nav from "../components/nav";
import Landing from "../components/landing";

export default function Home() {
  return (
    <Container>
      <Nav />
      <Landing />
      <About />
      <Projects />
    </Container >
  );
}
