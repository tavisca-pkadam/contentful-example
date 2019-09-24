import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default class HeaderText extends React.PureComponent {
  render() {
    return (
        <div style={{float:"left"}}>
          <Typography variant="h1" component="h2">
            American Express
        </Typography>
        </div>
    );
  }
}



