import "mapbox-gl/dist/mapbox-gl.css";
import React, { Component } from "react";
// import {render} from 'react-dom';
import MapGL, {Marker, Popup} from 'react-map-gl';
import Geocoder from "react-map-gl-geocoder";
import MARKER_STYLE from '../marker-style';
// import trails from '../trails.json';
// import API from '../../utils/API'
import Grid from '@material-ui/core/Grid';

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
      },
      popupInfo: null,
      trailData: [],
    }
    this._renderMarker = this._renderMarker.bind(this);
    console.log('trailData')
    console.log(this.state.trailData);
  }
  mapRef = React.createRef();

  componentDidMount() {
    window.addEventListener("resize", this._resize.bind(this));
    this._resize();
    
  }
  componentDidUpdate(prevProps) {
    console.log('trails')
    console.log(this.props.data);
    if (this.props.data !== prevProps.data) {
      this.setState({trailData: this.props.data})
      console.log(this.state)
    }
    // this.setState({trailData: this.props.data})
  }
  

// load saved trails
// loadTrails = (latitude, longitude) => {
//   API.searchTrails(latitude, longitude)
//     .then(res => {
//       console.log('SEARCH TRAILS RES ', res.data.trails);
      
//       // console.log(data.trails);
//       this.setState({ data: res.data.trails })
//     }
//     )
//     .catch(err => console.log(err));
// };
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
    this.props.loadTrails(this.state.viewport.latitude, this.state.viewport.longitude);
  };
   
  //Renders Hiking Marker
  _renderMarker(station, i) {
    const {name, summary, latitude, longitude} = station;
    return (
      <Marker 
      key={i} 
      summary={summary}
      longitude={longitude} 
      latitude={latitude}
      captureDrag={false} 
      captureOnClick={true}>
      <div className="station" onClick={this.props.handleTrailSelection} ><span>{name}</span></div>
      {/* // onClick={() => this.setState({popupInfo: station})}><Grid>{name}</Grid>> */}
      {/* onClick={console.log('clicked')} */}
        {/* <div onClick={ () => this.setState(this.state)} className="station"><span>{name}</span></div> */}
      </Marker>
    );
  }
  
  _renderPopup() {
    const {popupInfo} = this.props;

    return popupInfo && (
      <Popup tipSize={5}
        anchor="top"
        longitude={this.props.longitude}
        latitude={this.props.latitude}
        onClose={() => this.setState({popupInfo: 'check'})}>
        
        <Grid />
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
        {/* <div className="nav" style={navStyle}>
          <NavigationControl onViewportChange={this._updateViewport} />
        </div> */}
        {/* <ControlPanel containerComponent={this.props.containerComponent} /> */}
          <style>{MARKER_STYLE}</style>
        { this.props.data.map(this._renderMarker) }
        {this._renderPopup()}
        <Geocoder mapRef={this.mapRef} onViewportChange={this._onViewportChange} mapboxApiAccessToken={MAPBOX_TOKEN} />
      </MapGL>
    );
  }
}

export default GeoMap;