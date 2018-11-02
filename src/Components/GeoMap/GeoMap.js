import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
import {render} from 'react-dom';
import MapGL, {Marker} from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import MARKER_STYLE from '../marker-style';
import bartStations from '../bart-station.json';
import ControlPanel from '../control-panel';
// Please be a decent human and don't abuse my Mapbox API token.
// If you fork this sandbox, replace my API token with your own.
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
        zoom: 8
      }
    }
  };

  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
  }

  _resize() {
    this._onViewportChange({
      width: 450,
      height: 450
    });
  }

  _onViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };
  _renderMarker(station, i) {
    const {name, coordinates} = station;
    return (
      <Marker key={i} longitude={coordinates[0]} latitude={coordinates[1]}
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
        { bartStations.map(this._renderMarker) }
        <ControlPanel containerComponent={this.props.containerComponent}
          // settings={settings}
          // interactionState={{...interactionState}}
          onChange={this._onSettingChange} />
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    );
  }
}

export default GeoMap;
