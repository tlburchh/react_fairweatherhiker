import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
// import {render} from 'react-dom';
import MapGL, {Marker, NavigationControl, Popup } from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import MARKER_STYLE from '../marker-style';
import trails from '../trails.json';
import API from '../../utils/API(old)'
// import Locator from '../Locator/Locator'
// import ControlPanel from './control-panel';
// import TrailPin from './TrailPin';
// import NavControl from 'react-map-gl'
// import ControlPanel from '../control-panel';

// Ways to set Mapbox token: https://uber.github.io/react-map-gl/#/Documentation/getting-started/about-mapbox-tokens
const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

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
      popupInfo: null
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
      <Marker 
      key={i} 
      longitude={longitude} 
      latitude={latitude}
      captureDrag={false} 
      captureDoubleClick={false}>
              {/* <TrailPin size={20} onClick={() => this.setState({popupInfo: station})}><span>{name}</span></TrailPin> */}

        <div className="station"><span>{name}</span></div>
      </Marker>
    );
  }
  //Render popup for hiking marker
  _renderPopup() {
    const {popupInfo} = this.state;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={popupInfo.longitude}
        latitude={popupInfo.latitude}
        onClose={() => this.setState({popupInfo: null})} >
        {/* <CityInfo info={popupInfo} /> */}
        <p>CHECK</p>
      </Popup>
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
      {/* <Locator /> */}
        <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div>
        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
          <style>{MARKER_STYLE}</style>
        { this.state.viewport.trailsData.map(this._renderMarker) }
        {this._renderPopup()}
  
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    );
  }
}

export default GeoMap;
