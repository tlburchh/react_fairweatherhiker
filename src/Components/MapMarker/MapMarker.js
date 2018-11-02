import React, {Component} from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class MapMarker extends Component {
  render() {
    return (
      <ReactMapGL latitude={35.9940329} longitude={-78.898619} zoom={8} mapboxApiAccessToken={MAPBOX_TOKEN}>
      
        <Marker latitude={35.9940329} longitude={-78.898619} offsetLeft={-20} offsetTop={-10}>
          <div>You are here</div>
        </Marker>
      </ReactMapGL>
    );
  }
}

export default MapMarker;