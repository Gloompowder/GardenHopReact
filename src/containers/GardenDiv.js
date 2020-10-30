import React, { useState, useEffect } from 'react'
import GardenCard from '../components/GardenCard'

function GardenDiv(){
    const url = 'http://localhost:3000/api/v1/gardens'
    const [gardens, setGardens] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(r=>r.json())
        .then(data =>setGardens(data))
    })
    const gardenCards = gardens.map(eachGarden => <GardenCard garden={eachGarden} key={eachGarden.id}/>)
    return(
        <div className="gardens">
            {gardenCards}
            {/* if map, map container, else garden cards container*/}
        </div>
    )
}

export default GardenDiv
