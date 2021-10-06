import {
  useState,
  useEffect
} from "react";

const useCurrentLocation = (options = {}) => {

  //const [location, setLocation] = useState();
  const [location, setLocation] = useState(JSON.parse(window.localStorage.getItem('location')));
  const [error, setError] = useState();

  const handleSuccess = (pos) => {
    const {
      latitude,
      longitude
    } = pos.coords;
    /*window.localStorage.setItem('location', {
      latitude,
      longitude
    })*/
    setLocation({
      latitude,
      longitude
    });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {
    const {
      geolocation
    } = navigator;
    if (!geolocation) {
      setError("Geolocation is not supported.");
      return;
    }
    !location&&geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return {
    location,
    setLocation,
    error
  };
};

export default useCurrentLocation;