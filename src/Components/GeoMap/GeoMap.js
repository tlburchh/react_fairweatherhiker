import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
// import {render} from 'react-dom';
import MapGL, {Marker} from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import MARKER_STYLE from '../marker-style';
import trails from '../trails.json';
import API from '../../utils/API'
// import ControlPanel from '../control-panel';

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

class GeoMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 100,
        height: 100,
        latitude: 35.9940329,
        longitude:  -78.898619,
        zoom: 10,
        trailsData: [],
      },
  }
  }
  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
    
  }

//load saved trails
loadTrails = () => {
  API.searchTrails()
    .then(res =>
      this.setState({ trailsData: res.data })
    )
    .catch(err => console.log(err));
};
//resize viewport in UI
  _resize() {
    this._onViewportChange({
      width: 450,
      height: 450
    });
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
      latitude: {...this.state.viewport.latitude},
      longitude: {...this.state.viewport.longitude},
    });
    console.log(this.state.viewport)
    this.loadTrails();
  };
   
  //Renders Hiking Marker
  _renderMarker(station, i) {
    const {name, latitude, longitude} = station;
    return (
      <Marker key={i} longitude={longitude} latitude={latitude}
        captureDrag={false} captureDoubleClick={false}>
        <div className="station"><span>{name}</span></div>
      </Marker>
    );
  }

  render() {
    return (
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
          <style>{MARKER_STYLE}</style>
        { trails.map(this._renderMarker) }
  
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    );
  }
}

export default GeoMap;
