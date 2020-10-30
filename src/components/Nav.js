import React from 'react'
import gardenhop from '../../src/logo.png'
// import Link from 'react-router-dom'

function Nav(props){
    return(
        <div className="nav-bar">
            <img className= "logo" src={gardenhop} alt="GardenHop"/>
                <div className= "nav-links">
                    <p>Profile</p>
                    <p>Gardens</p>
                    <p>Contact</p>
                    <p>Signup</p>
                    {/* <Link to="/"><div>Home</div></Link>
                    <Link to="/gardens"><div>Gardens</div></Link>
                    <Link to="/contact"><div>Contact</div></Link>
                    <Link to="/contact"><div>Signup</div></Link> */}
                </div>
        </div>
    )
}

export default Nav