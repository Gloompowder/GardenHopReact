import React from 'react'

function GardenCard(props){
    return(
        <div className="garden-card">
            <div className="garden-container">
            <h4>{props.garden.address}</h4>
            <p>{props.garden.boro}</p>
            <p>{props.garden.garden_size}</p>
            <p>{props.garden.community_board}</p>
            </div>
        </div>
    )
}

export default GardenCard