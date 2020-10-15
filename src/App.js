import React from 'react';
import './App.css';
import GardenDiv from '../src/containers/GardenDiv'

const url = 'http://localhost:3000/api/v1/gardens'

class App extends React.Component{
  state={gardens:[]}
  fetchGarden = () =>{
    fetch(url)
    .then(r=>r.json)
    .then(data =>this.setState({gardens: data}))
  }
  render(){
      return(<div className="garden-div">
        <GardenDiv gardens={this.state.gardens}/>
      </div>
      )
  }
}

export default App
