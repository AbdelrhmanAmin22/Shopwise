import React from "react";
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Marker = () => (
    <div style={{ color: '#ff324d', fontSize: '50px' }}>
        <FontAwesomeIcon icon={faLocationDot}  />
    </div>
    );

export default function SimpleMap() {
    const defaultProps = {
        center: {
        lat: 10.99835602,
        lng: 77.01502627
        },
        zoom: 11
    };

    return (
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD137eY8u1aIaWxpt2VkmSTqWkNTAqKbIo" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <Marker
            lat={10.99835602}
            lng={77.01502627}
            />
        </GoogleMapReact>
        </div>
    );
}
