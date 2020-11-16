import React from 'react';
import './App.css';
import GardenDiv from '../src/containers/GardenDiv'
// import UserDiv from '../src/containers/UserDiv'
import Nav from '../src/components/Nav'
import Search from '../src/components/Search'
import GardenCard from '../src/containers/GardenDiv'
import Home from '../src/components/Home'
import ProfileDiv from '../src/components/ProfileDiv'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
  render(){
      return(
      <div className="garden">
        <Nav/>
        <Search/>
            <Router>
              <Switch>
                <Route path="/gardens/:id" component={GardenCard}/>
                <Route path="/gardens" component={GardenDiv}/>
                <Route path="/profile" component={ProfileDiv}/>
                <Route exact path = "/" component={Home} />
              </Switch>
            </Router>
      </div>
      )
  }
}

export default App
