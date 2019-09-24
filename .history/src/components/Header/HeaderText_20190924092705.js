import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import '../../../src/animista.css'

export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div >
          <Typography variant="h1" component="h2">
             h1. Heading
        </Typography>
        </div>
    );
  }
}



