import React from 'react';
import { Grid,Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles=()=>({
    button: {
        margin: 10,
      },
})

const Component=({classes,toggleFilter})=>{
    return(
        <Grid item xs={12}>
        <Button variant="contained" className={classes.button} onClick={()=>toggleFilter('All')}>
        All
      </Button>
      <Button variant="contained" color="primary" className={classes.button} onClick={()=>toggleFilter('Back')}>
        Backend
      </Button>
      <Button variant="contained" color="secondary" className={classes.button} onClick={()=>toggleFilter('Front')}>
        frontend
      </Button>
      </Grid>
    )
}

export default withStyles(styles)(Component);