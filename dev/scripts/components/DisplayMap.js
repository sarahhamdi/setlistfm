import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
import { helpers } from '../helpers/setListHelpers';


const Markers = ({ text }) => {
  return (
    <div className="google-map-marker" style={{
      position: 'relative', color: 'white', background: 'rgba(237, 65, 87, 1.00)',
      height: 40, width: 40, top: 0, left: 0, borderRadius: 20, fontSize: 34, fontWeight: 700, paddingLeft: 7,    
      paddingTop: 0}}>
      {text}
    </div>
  )
}

const locations = [
  {lat: 59.955413, lng: 30.337844},
  {lat: -33.718244, lng: 150.363181},
]

const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class DisplayMap extends React.Component {
  render() {
    return (
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyA8IxNPUCISkrKCpWjWbNKKdkD5NfsfNwc'}}
        defaultCenter={{lat: 34.26, lng: -40.53}}
        defaultZoom={0}
      >

      {this.props.venueCoords.map((coordpair) => {
        return (
          <Markers
            lat={coordpair[0]}
            lng={coordpair[1]}
            text={'✪'}
          />
        )
      })}
        
      </GoogleMapReact>
    );
  }
}



export { DisplayMap, Markers };