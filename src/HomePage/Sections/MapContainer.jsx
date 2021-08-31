import React from "react";
import { GoogleMap, withScriptjs,withGoogleMap } from "react-google-maps";

const MapContainer = (props) => {
  return <GoogleMap 
  defaultCenter={{ lat:-12.03447362749258, lng:-76.94219899582913}} 
  defaultZoom={5} />;
};

export default withScriptjs(withGoogleMap(MapContainer))