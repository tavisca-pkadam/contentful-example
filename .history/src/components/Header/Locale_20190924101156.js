import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div >
           <ToggleButtonGroup
            // value={alignment}
            exclusive
            // onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton value="left" aria-label="left aligned" style={{backgroundColor:"red"}}>
              English
            </ToggleButton>
            <ToggleButton value="right" aria-label="centered" style={{backgroundColor:"aqua"}}>
              Germany   
            </ToggleButton>
            
          </ToggleButtonGroup>
        </div>
    );
  }
}



