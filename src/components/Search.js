import React from 'react'

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
    console.log(props.searching)
    return(
            <form className="search">
                <input type="text" />
                <button className="search-button">Search</button>
            </form>
    )
}

export default Search