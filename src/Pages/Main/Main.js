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
        <Grid item xs={6}>
          <GeoMap />
          <Paper className={classes.paper}>Map
          </Paper>
        </Grid>
        <Grid item xs={6}>
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
