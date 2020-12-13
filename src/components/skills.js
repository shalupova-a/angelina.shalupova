import React from "react";
import {Chip} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
        root: {
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > *': {
                        margin: theme.spacing(0.5),
                },
        },
}));

export default function SkillsComponent() {
        const classes = useStyles();
        return (
            <div className="skills">
                    <p className="subtitle">skills/tools</p>
                <div className={classes.root}>
                    <Chip className="chip-item" label="React.js"/>
                    <Chip className="chip-item" label="Javascript"/>
                    <Chip className="chip-item" label="HTML/CSS"/>
                    <Chip className="chip-item" label="Python"/>
                    <Chip className="chip-item" label="Java"/>
                    <Chip className="chip-item" label="C#"/>
                    <Chip className="chip-item" label="Git/Github"/>
                    <Chip className="chip-item" label="Vim"/>
                    <Chip className="chip-item" label="Artillery"/>
                    <Chip className="chip-item" label="Selenium"/>
                    <Chip className="chip-item" label="C++"/>
                    <Chip className="chip-item" label="Powershell"/>
                </div>
            </div>
        );

}