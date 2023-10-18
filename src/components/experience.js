import React from "react";
import "../pages/index.css"
import {Typography, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink} from "@fortawesome/free-solid-svg-icons";

const ExperienceItem = (props) =>
    <ListItem style={{display: 'flex'}}>
        <ListItemAvatar>
            <IconButton href={props.link}>
                <FontAwesomeIcon icon={faLink}/>
            </IconButton>
        </ListItemAvatar>
        <ListItemText primary={<Typography>{props.title}</Typography>} secondary={props.date} />
    </ListItem>

const Experience = () =>
        <List dense style={{borderRadius: '4px', backgroundColor: 'white', width: '85%'}}>
            <ExperienceItem title={"Full-Stack Developer Co-op/Intern at Wellframe"} date={"2021-present"}link={"https://wellframe.com"}/>
            <Divider variant="inset" component="li"/>
            <ExperienceItem title={"Girls Who Code Facilitator"} date={"2019-present"} link={"http://www.neugirlswhocode.org/"}/>
            <Divider variant="inset" component="li"/>
            <ExperienceItem title={"Internet Firmware Validation Co-op at Starry"} date={"2020"} link={"https://starry.com"}/>
            <Divider variant="inset" component="li"/>
            <ExperienceItem title={"Test Automation Co-op at Blueport"} date={"2019"} link={"https://blueport.com"}/>
            <Divider variant="inset" component="li"/>
            <ExperienceItem title={"Fundamentals of Computer Science I TA"} date={"2018-2019"} link={"https://course.ccs.neu.edu/cs2500/"}/>
        </List>

export default Experience