import React, { useState, useEffect } from 'react'
import GardenCard from '../components/GardenCard'
import MapDiv from '../containers/MapDiv'

function GardenDiv(props){
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
            <MapDiv gardens = {gardenCards}/>
            {gardenCards}
        </div>
    )
}

export default GardenDiv
