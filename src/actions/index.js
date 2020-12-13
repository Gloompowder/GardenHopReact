export const keywordAction = (searchTerm) => ({
    type:"SEARCH_GARDENS",
    searchTerm
})

export const addressAction = (searchTerm) => ({
    type:"SEARCH_ADDRESS",
    searchTerm
})

export const distanceAction = (searchTerm) => ({
    type:"SEARCH_DISTANCE",
    searchTerm
})

export const searchGardens = (searchTerm) => {
    return keywordAction(searchTerm)
}

export const searchAddress = (addressSearchTerm) => {
    return addressAction(addressSearchTerm)
}

export const searchDistance = (distanceSearchTerm) => {
    return distanceAction(distanceSearchTerm)
}

