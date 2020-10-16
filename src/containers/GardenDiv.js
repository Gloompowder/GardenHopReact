import React from 'react'
import GardenCard from '../components/GardenCard'

function GardenDiv(){
    const gardens = this.props.gardens.map(eachGarden => <GardenCard garden={eachGarden} key={eachGarden.id}/>)
    console.log(gardens)
    return(
        <div className="gardens">
            {gardens}
        </div>
    )
}

export default GardenDiv
