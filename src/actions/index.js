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

export const setMoneyButtonChosenIndex = (newIndex)=>{
    return {
        type: 'SETMONEYBUTTONCHOSENINDEX',
        payload: newIndex
    }
}

export const setShelter = (shelter)=>{
    return {
        type: 'SETSHELTER',
        payload: shelter
    }
}

export const nextTab = ()=>{
    return{
        type: 'NEXTTAB'
    }
}

export const previousTab = ()=>{
    return{
        type: 'PREVIOUSTAB'
    }
}

export const setUserInformation = (userInformation)=>{
    return {
        type: 'SETUSERINFORMATION',
        payload: userInformation
    }
}

export const setAgreeWithPersonalInformation = (value)=>{
    return{
        type: 'SETAGREEWITHPERSONALINFORMATION',
        payload: value
    }
}