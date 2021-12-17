import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Spinner from './spinner';

const mapContainerStyle = {
  width: '345px',
  height: '300px',
  borderRadius: '2%',
  marginTop: '.5rem',
};

function MyMap({ lat, lng }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
  });

  const center = {
    lat: parseInt(lat),
    lng: parseInt(lng),
  };

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return <Spinner />;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={{ lat: parseInt(lat), lng: parseInt(lng) }} />
      </GoogleMap>
    </div>
  );
}

export default React.memo(MyMap);
