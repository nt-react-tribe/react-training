import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {compose} from 'ramda';
import { withStyles } from '@material-ui/styles';

const styles = ()=>({
    slim: {
      flexGrow: 1,
      backgroundColor:'red'
    },
    appBar:{
        backgroundColor:'blue'
    }
  });
const Component=({classes,props})=>{
    return(
        <div className={classes.slim}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            {props.name}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
}
export default compose(withStyles(styles))(Component);