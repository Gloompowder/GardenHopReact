import React, { useState, useEffect } from 'react'
import GardenCard from '../components/GardenCard'
import MapDiv from '../containers/MapDiv'

function GardenDiv(){
    const url = 'http://localhost:3000/api/v1/gardens'
    const [gardens, setGardens] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(data =>setGardens(data))
    })
    const [mapToggled, setmapToggled] = useState(false)

    const togglingMap=()=>{
        if (mapToggled) {
            setmapToggled(false)
        }
        else {
            setmapToggled(true)
        }
    }
    const gardenCards = gardens.map(eachGarden => <GardenCard garden={eachGarden} key={eachGarden.id}/>)
    return(
        <div className="garden-container">
            <button className="mapButton" onClick={togglingMap}>{mapToggled ? "Show Cards" : "Show Map"}</button>
            <div className="gardens">
                {mapToggled ? <MapDiv gardens = {gardens} /> : gardenCards}
                {/* if map, map container, else garden cards container*/}
            </div>
        </div>
    )
}

export default GardenDiv
