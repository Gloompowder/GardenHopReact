const searches = (state, action)=>{
    switch(action.type) {
        case "SEARCH_GARDENS":
            return action.searchTerm
        default: 
            return state
    }
}

export default searches