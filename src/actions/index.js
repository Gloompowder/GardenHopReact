export const keywordAction = (searchTerm) => ({
    type:"SEARCH_GARDENS",
    searchTerm
})

export const addressAction = (searchTerm) => ({
    type:"SEARCH_ADDRESS",
    searchTerm
})

export const searchGardens = (searchTerm) => {
    return keywordAction(searchTerm)
}

export const searchAddress = (addressSearchTerm) => {
    return addressAction(addressSearchTerm)
}

