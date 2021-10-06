import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import "../Sections/cities.scss";
import L from 'leaflet';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup, Tooltip, useMapEvent, useMap
} from 'react-leaflet'

import marker from '../../images/place.svg';

const icon = new L.icon({
    iconSize: [10, 10],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: marker,
    //shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png"
});



function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}

export default function Cities({ location, mapRef }) {

    const [nearestCities, setNearestCities] = useState([])


    useEffect(() => {
        console.log('\t Cities:location:', location)
        const getNearestCities = async () => {
            const baseUrl = "http://api.openweathermap.org/data/2.5/box/city?bbox="
            const bbox = "-75.62,-18.43,-69.84,-14.21"
            const suffix = ",7&appid=5b05fc33f8dcfdc54fbc7f8a22733bfe"

            const response = await fetch(baseUrl + bbox + suffix)
            if (response.status === 200) {
                const data = await response.json()
                let temp = [];
                setNearestCities(data.list);
                //console.log('nearest:', nearestCities);
            }
        }
        getNearestCities();

    }, [location])

    return (
        <div id="mapid">
            {location
                ? <MapContainer center={[location.latitude, location.longitude]} zoom={6} scrollWheelZoom={false} id="map">
                    <div>Div</div>
                    <TileLayer
                        attribution="<a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OSM</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'></a></strong>"
                        url="https://api.mapbox.com/styles/v1/fvilca/cktrkqqvv0rzz19pbj1zy2qyh/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZnZpbGNhIiwiYSI6ImNrdHJrbXVmbjE3OHoyb3E1b3BxcjJmanIifQ.68tQjoLnCXwgeBsGbKWt7A"
                    //attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[location.latitude, location.longitude]} icon={icon}>
                        <Popup>popup</Popup>
                        <Tooltip
                            direction="right"
                            offset={[0, 0]}
                            opacity={1}
                            permanent
                            className='leaflet-tooltip'>
                            <span className='leaflet-tooltip-own'>cityName</span>
                        </Tooltip>
                    </Marker>
                    {/*<NearestCities nearestCities={nearestCities} />*/}
                    <ChangeView center={[location.latitude, location.longitude]}/>
                </MapContainer>
                : <div id="map">'cargando location'</div>
            }
        </div>
    )
}

export const NearestCities = ({ nearestCities }) => {
    return (
        <div>
            {nearestCities.map(
                ({ name, coord, main }, i) => {
                    return (
                        <Marker key={i} position={[coord.Lat, coord.Lon]} icon={icon} >
                            <Tooltip
                                className='tooltip_'
                                direction="right" offset={[-70, 0]} permanent >
                                <span className='filter-text--dark'>
                                    <div className='temp--tooltip'>
                                        <p className='filter-text--dark' >{(main.temp).toFixed(0)}</p>
                                        <p className='temp--symbol'>°</p>
                                        <p className='temp--dec temp--dec--pos' >,{getDecimal(main.temp)[1]}</p>
                                    </div>

                                </span>
                            </Tooltip>
                        </Marker>)
                })}
        </div>
    )
}

const getDecimal = (n) => {
    n = n.toFixed(1)
    n = (n + "").split(".");
    return n;
}

