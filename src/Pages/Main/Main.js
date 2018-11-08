import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GeoMap from '../../Components/GeoMap/GeoMap';
import AppBar from '../../Components/AppBar/AppBar';
import './Main.css';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Main(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <AppBar />
      <Grid container spacing={24}>
      <Grid xs={1} sm={0} />
        <Grid style={{paddingTop: 30}}>
          <Paper>
          <GeoMap />
          </Paper>
        </Grid>
       
        <Grid style={{paddingTop: 30}} item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
