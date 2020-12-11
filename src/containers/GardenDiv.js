import React, { useState, useEffect } from 'react'
import GardenCard from '../components/GardenCard'
import MapDiv from '../containers/MapDiv'
import { useSelector } from 'react-redux';
import Search from '../components/Search';

function GardenDiv(){
    const indexUrl = 'http://localhost:3000/api/v1/gardens'
    // const searchData?.keyword = useSelector(state => state?.searchData?.keyword);
    // const searchData?.address = useSelector(state => state?.searchData?.address);
    const searchData = useSelector(state => state);
    const [queryUrl, setQueryUrl] = useState()

    useEffect(()=>{
        setQueryUrl(`${indexUrl}?keyword=${searchData?.keyword}?address=${searchData?.address}`)
    },[searchData])
    

    const url = () => queryUrl ? queryUrl : indexUrl

    const [gardens, setGardens] = useState([])

    useEffect(()=>{
        fetch(url())
        .then(r=>r.json())
        .then(data =>setGardens(data))
    }, [searchData])

    const [mapToggled, setmapToggled] = useState(false)

    const togglingMap=()=>{
        if (mapToggled) {
            setmapToggled(false)
        }
        else {
            setmapToggled(true)
        }
    }
    const gardenCards = gardens.map(eachGarden => <GardenCard garden={eachGarden} key={eachGarden.id}/>)
    return(
        <div className="garden-container">
            {console.log(url())}
            <button className="mapButton" onClick={togglingMap}>{mapToggled ? "Show Cards" : "Show Map"}</button>
            <div className="gardens">
                {mapToggled ? <MapDiv gardens = {gardens} /> : gardenCards}
                {/* if map, map container, else garden cards container*/}
            </div>
        </div>
    )
}

export default GardenDiv
