export const searches = (state, action)=>{
    console.log(state)
    console.log(action)
    switch(action.type) {
        case "SEARCH_GARDENS":
            return {...state, keyword: action.searchTerm}
        case "SEARCH_ADDRESS":
            return {...state, address: action.searchTerm}
        default: 
            return {address:"", keyword: ""}
    }
}

