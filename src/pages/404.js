import { Container, IconButton } from "@mui/material"
import React from "react"
import { Grid } from "@mui/material"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Error = () =>
    <Container>
        <Grid container
            sx={{ marginTop: '5%' }} justify="space-evenly" spacing={3}>
            <Grid>
                <Grid item>
                    <p className="tagline">Uh oh...</p>
                </Grid>
                <Grid item>
                    <p>There is nothing here :0</p>
                </Grid>
                <Grid item>
                    <IconButton href="/" className="button">
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    </Container>

export default Error