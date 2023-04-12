import { MapContainer, TileLayer} from 'react-leaflet';
import React from 'react';
import L from 'leaflet';
import markerIcon from '../images/icon-location.svg';
import "leaflet/dist/leaflet.css";

const myIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon,
    popupAnchor:  [-0, -0],
    iconSize: [40,45],     
});


const Map = ({coords}) => {

    const [map, setMap] = React.useState(null)
    // const [coord, setCoord] = React.useState(coords)    

    React.useEffect(() => {
        if(map !== null){
            map?.setView(coords, 13)
            L.marker(coords, {icon: myIcon}).addTo(map)
        }
    }, [coords, map])

    const displayMap = React.useMemo(
        () => (
            <MapContainer 
                center={coords} 
                zoom={13} 
                scrollWheelZoom={false} 
                ref={setMap}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        ), []
    )

    return (
        <>
            {displayMap}
        </>
    ) 
}
export default Map;
