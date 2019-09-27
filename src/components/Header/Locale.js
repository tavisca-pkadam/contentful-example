import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class Locale extends React.PureComponent {
  render() {
    console.log(this.props.locale)
    var english = this.props.locale === "en-US"  ? "green" : "red" 
    var french = this.props.locale === "en-US" ? "red" : "green" 
    return (
        <div style={{padding:"2px"}}>
           <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" style={{backgroundColor:english, height:"30px",  color:"white", fontWeight:"bold"}}>
              English
            </ToggleButton>
            <ToggleButton value="right" aria-label="centered" style={{backgroundColor:french, height:"30px", color:"white", fontWeight:"bold"}}>
              French   
            </ToggleButton>
            
          </ToggleButtonGroup>
        </div>
    );
  }
}



