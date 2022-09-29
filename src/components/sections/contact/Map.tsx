import React from "react";
import GoogleMapReact, { MapOptions } from 'google-map-react'
import { FaMapMarkerAlt } from 'react-icons/fa';

const style: React.CSSProperties = {
    color: '#cc0404',
    fontSize: "40px",
    display: "block",
    margin: "0 auto 20px"
}

const markerStyle: React.CSSProperties = {
    fontSize: "22px",
    color: "#121212",
    display: "block",
    width: "170px",
    textAlign: "center",
    fontFamily: '"Fuzzy Bubbles", cursive'
}

const CustomMarker = ({ text }: any) => <div className="marker" style={markerStyle}>
    <FaMapMarkerAlt 
        style={style}
    />
    {text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
          lat: 51.51208,
          lng: -0.205742
        },
        zoom: 16
    }

     const options: MapOptions = {
            backgroundColor: "red",
            draggable: false,
            fullscreenControl: false,
            keyboardShortcuts: true,
            mapId: "contact-map",
            mapTypeControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            scrollwheel:false,
            zoomControl: false
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '400px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={options}
          >
            <CustomMarker 
                lat={defaultProps.center.lat}
                lng={defaultProps.center.lng}
                text="Street Dance Academy"
            />
          </GoogleMapReact>
        </div>
      );
}

export default Map