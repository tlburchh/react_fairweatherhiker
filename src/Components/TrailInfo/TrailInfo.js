import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GeoMap from '../../Components/GeoMap/GeoMap'

class TrailInfo extends Component {
  constructor(props) {
    super(props);

    this.state={

    }
  }

  render() {
console.log('Trail Props')
console.log(this.props.data[1])
    return(
      <div>
       
          <Grid container >
            <Typography> Trail Information </Typography>
            <Grid>  </Grid>
            <Typography> Trail Information </Typography>
            <Typography> Trail Information </Typography>
            <Typography> Trail Information </Typography>
          </Grid>
      </div>
    )
  }
}

export default TrailInfo
