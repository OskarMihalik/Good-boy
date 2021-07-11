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