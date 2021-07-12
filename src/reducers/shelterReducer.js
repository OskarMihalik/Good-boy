const initialState = {
    selectedShelterId: 0,
    shelterList: []
}

const shelterReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SETSHELTERLIST':
            return {
                ...state,
                shelterList: action.payload
            }
        case 'SETSELECTEDSHELTERID':
            return {
                selectedShelterId: action.payload,
                shelterList: state.shelterList
            }
        default:
            return state
    }
}

export  default shelterReducer