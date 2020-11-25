import React from 'react';
import './App.css';
import GardenDiv from '../src/containers/GardenDiv'
// import UserDiv from '../src/containers/UserDiv'
import Nav from '../src/components/Nav'
import Search from '../src/components/Search'
import GardenCard from '../src/containers/GardenDiv'
import Home from '../src/components/Home'
import ProfileDiv from '../src/components/ProfileDiv'
import Test from '../src/components/Test'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const [searches, setSearches] = useState("")
const searching = (e) => {
    // taking the data and getting each object before calling setgardens
    // data.props.garden
    // setGardens(data.props.garden)
    useEffect((e)=>{
      setSearches(e.target.value)
    })
}

class App extends React.Component{
  render(){
      return(
      <div className="garden">
        <Nav/>
        <Search searching = {searching}/>
        <Test/>
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
