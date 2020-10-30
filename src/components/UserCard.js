import React from 'react'

function GardenCard(props){
    return(
        <div className="user-card">
            <h1>{props.User.username}</h1>
            <p>{props.User.email}</p>
        </div>
    )
}

export default GardenCard