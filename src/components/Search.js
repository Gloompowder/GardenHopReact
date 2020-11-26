import React, { useState, useEffect } from 'react'

function Search(props){
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
      setSearches(e.target.value) 
}
    return(
            <form className="search">
                <input type="text" onChange={searching}/>
            </form>
    )
}

export default Search