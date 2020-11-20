import React from 'react'

function GardenCard(props){
    return(
        <div className="garden-card">
            <div className="garden-container">
            <h4>Address: {props.garden.address}</h4>
            <p>Boro: {props.garden.boro}</p>
            <p>Size: {props.garden.garden_size}</p>
            <p>Community Board: {props.garden.community_board}</p>
            </div>
        </div>
    )
}

export default GardenCard