import {Component } from "react";
import PropTypes from "prop-types";
// import { accessToken } from "../../api/tokens/mapbox";

const accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
import mapboxgl from "mapbox-gl";

class Locator extends Component {
  static contextTypes = { map: PropTypes.object.isRequired };


  componentDidMount() {
    const { map } = this.context;

    const  geolocate  = 
      new mapboxgl.GeolocateControl({
        accessToken,
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      })

    map.addControl(
      geolocate
    );
  setTimeout(geolocate._onClickGeolocate.bind(geolocate), 5)
  }


  render() {
    return null;
  }
}

export default Locator;