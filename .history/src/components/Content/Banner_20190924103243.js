import Paper from '@material-ui/core/Paper';
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default class Banner extends React.PureComponent {
  render() {
    return (
        <div style={{float:"left"}}>
         <Paper>
         <img src="https://via.placeholder.com/70"/>
         <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
       
        <Typography  color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
         </Paper>
        </div>
    );
  }
}



