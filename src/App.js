import React from 'react';
import './App.css';
import GardenDiv from '../src/containers/GardenDiv'

class App extends React.Component{
  render(){
      return(
      <div className="garden-div">
        <GardenDiv />
      </div>
      )
  }
}

export default App
