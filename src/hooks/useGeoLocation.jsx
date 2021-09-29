import React, { useEffect } from "react"
const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const useGeoLocation = (onSuccess, onError) => {

    useEffect(() => {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
        } else {
            navigator.geolocation.getCurrentPosition(onSuccess, () => {
                console.log('Unable to retrieve your location');
            });
        }
    }, [])

    return []
}

export default useGeoLocation