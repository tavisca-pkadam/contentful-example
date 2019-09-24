import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../../src/animista.css'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
            <ToggleButton value="left" aria-label="left aligned">
              English
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
              Germany
            </ToggleButton>
            
          </ToggleButtonGroup>
        </div>
    );
  }
}



