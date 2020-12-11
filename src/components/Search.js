import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { searchGardens, searchAddress } from '../actions'


function Search({dispatch}){
    // const [mapToggled, setmapToggled] = useState(false)

    // const togglingMap=()=>{
    //     if (mapToggled) {
    //         setmapToggled(false)
    //     }
    //     else {
    //         setmapToggled(true)
    //     }
    // }
    // const [search, setsearch] = useState("")
    
    // const searching=(e)=>{
    //     setsearch(e.target.value)
    // }
    // console.log(props.searching)
    const [searches, setSearches] = useState("")
    const searching = (e) => {
    // taking the data and getting each object before calling setgardens
    // data.props.garden
    // setGardens(data.props.garden)
        e.preventDefault()
        dispatch(searchGardens(e.target.value))
        setSearches(e.target.value) 
}
    const [addressSearches, setAddressSearches] = useState("")

    const addressSearching = (e) => {
        e.preventDefault()
        console.log(searchAddress(e.target.value))
        dispatch(searchAddress(e.target.value))
        setAddressSearches(e.target.value)
    }    
    return(
            <form className="search">
                <input type="text" onChange={searching}/>
                <br></br>
                <input type="text" onChange={addressSearching}/>
            </form>
    )
}

Search = connect()(Search)

export default Search
