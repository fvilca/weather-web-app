import { useState } from "react"
import { useEffect } from "react/cjs/react.development"

const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;

const initialGeoLoc = {
    loaded: false,
    coordinates: { lat: '', lng: '' },
    cityName: '*',
    country: '*',
    error: {},
}

const useGeoLocation = () => {

    const [geoLocation, setGeoLocation] = useState(initialGeoLoc)

    const onSuccess = (location) => {
        setGeoLocation((last) => ({
            ...last,
            loaded: true,
            coordinates: { lat: location.coords.latitude, lng: location.coords.longitude },
            error: null,
        }))
        const cityName_OW_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${location.coords.latitude}&lon=${location.coords.longitude}&limit=5&appid=5b05fc33f8dcfdc54fbc7f8a22733bfe`
        const geoReverseURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&sensor=false&key=${REACT_APP_GOOGLE_MAPS_API_KEY}`;

        /*fetch(geoReverseURL)
            .then(response => response.json())
            .then(data => console.log('geoReverse', data))*/

        fetch(cityName_OW_URL)
            .then(response => response.json())
            .then(data => (
                console.log('**', data),
                setGeoLocation((last) => ({
                    ...last,
                    cityName: data[0].name,
                    country: data[0].country,
                }))
            ))
    }
    const onError = (error) => {
        setGeoLocation({
            loaded: true,
            coordinates: { lat: '', lng: '' },
            error
        })
    }
    useEffect(() => {
        if (!"geolocation" in navigator) {
            console.log('No soporta GeoLocalization')
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    }, [])
    return geoLocation;
}

export default useGeoLocation