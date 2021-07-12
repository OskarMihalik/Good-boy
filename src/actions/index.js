export const setActiveTab = (activeTabOb) => {
    return {
        type: 'SETACTIVETAB',
        payload: activeTabOb
    }
}

export const changeActiveButton = (activeButton)=>{
    return {
        type: 'SETACIVEBUTTON',
        payload: activeButton
    }
}

export const setShelterList = (list) => {
    return {
        type: 'SETSHELTERLIST',
        payload: list
    }
}

export const setSelectedShelterId = (newId) => {
    return {
        type: 'SETSELECTEDSHELTERID',
        payload: newId
    }
}