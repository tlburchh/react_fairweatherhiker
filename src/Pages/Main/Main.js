import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GeoMap from '../../Components/GeoMap/GeoMap';
import AppBar from '../../Components/AppBar/AppBar';
import TrailInfo from '../../Components/TrailInfo/TrailInfo'
import './Main.css';
import API from '../../utils/API'

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

class Main extends Component  {
  constructor(props){
    super(props);
    this.state={
      data: []
    }
  }

//load saved trails
loadTrails = (latitude, longitude) => {
  API.searchTrails(latitude, longitude)
    .then(res => {
      console.log('SEARCH TRAILS RES ', res.data.trails);
      
      // console.log(data.trails);
      this.setState({ data: res.data.trails })
    }
    )
    .catch(err => console.log(err));
};

  render() {
    const { classes } = this.props;
  //   console.log('main state')
  //  console.log(this.state.data)
  return (
    <div className={classes.root}>
    <AppBar />
      <Grid container spacing={24}>
      <Grid item xs={1}/>
        <Grid style={{paddingTop: 30}}>
          <Paper>
          <GeoMap data= {this.state.data} loadTrails={this.loadTrails}/>
          </Paper>
        </Grid>
       
        <Grid style={{paddingTop: 30}} item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <TrailInfo data= {this.state.data} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
