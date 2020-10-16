import React from 'react'

class GardenCard extends React.Component{
    render(){
        console.log(this.props.garden)
        return(
            <div className="garden-card">
                <h1>{this.props.garden.address}</h1>
                <p>{this.props.garden.boro}</p>
                <p>{this.props.garden.garden_size}</p>
                <p>{this.props.garden.community_board}</p>
            </div>
        )
    }
}

export default GardenCard