import React from 'react'
import GardenCard from '../components/GardenCard'

class GardenDiv extends React.Component{
    render(){
        const garden= this.props.gardens.map(eachgarden => <GardenCard garden={eachgarden} key={eachgarden.id}/>)
        console.log(this.props.gardens)
        return(
            <div className="gardens">
                {garden}
            </div>
        )
    }
}

export default GardenDiv
