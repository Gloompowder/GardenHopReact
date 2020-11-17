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

    const [toggleMap, setToggle] = useState(false)
    function setToggle(){
        return <button 
        className = "map-button" 
        onClick={() => {toggleMap===false ? setToggle(true) : setToggle(false)}}>
        </button>
    }

    const gardenCards = gardens.map(eachGarden => <GardenCard garden={eachGarden} key={eachGarden.id}/>)
    return(
        <div className="gardens">
            {toggleMap === true ? <MapDiv gardens = {gardenCards} mapButton={setToggle}/> : nil}
            {gardenCards}
        </div>
    )
}

export default GardenDiv
