// // import {GoogleApiWrapper} from 'google-maps-react';

// // function MapContainer(props){
// //     return(
// //     )
// // }

// // export default MapContainer
// import React from 'react'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import Icon from 'leaflet'
// // Google Map
// // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 

// export class MapContainer extends React.Component {
//   render() {
//     return (
//             <Map>
//                 <TileLayer
//                 url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>
//                 contributors'
//                 />
//             </Map>

//     //   <Map google={this.props.google} zoom={14}>
 
//     //     <Marker onClick={this.onMarkerClick}
//     //             name={'Current location'} />
 
//     //     <InfoWindow onClose={this.onInfoWindowClose}>
//     //         <div>
//     //         </div>
//     //     </InfoWindow>
//     //   </Map>

//     );
//   }
// }

 
// // export default GoogleApiWrapper({
// //   apiKey: (process.env.REACT_APP_MAP)
// // })(MapContainer)
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import React, { useState, useEffect } from 'react'
import leaflet from 'leaflet'

function MapDiv(props){

    const url = 'http://localhost:3000/api/v1/gardens'
    const [gardens, setGardens] = useState([])
    const depropping = (data) => {
        // taking the data and getting each object before calling setgardens
        // data.props.garden
        // setGardens(data.props.garden)
    }
    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(data =>setGardens(data))
    })

    const position = [40.78343, -73.96625]

    const gardenMarkers = props.gardens.map(garden =>{ 
        return(
            <Marker 
            key={garden.id}            
            position={[parseFloat(garden.props.garden.latitude),parseFloat(garden.props.garden.longitude)]}>
                <Popup>
                    <h1>{garden.props.garden.address}</h1>
                    <p>Property Id: {garden.props.garden.property_id}</p>
                </Popup>
            </Marker>
        )
    })

    // const gardenMarkers = <GardenMarker garden={gardens[0]}/>
    return(
        <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {gardenMarkers}
            </MapContainer>
        </div>
    )
}
export default MapDiv

