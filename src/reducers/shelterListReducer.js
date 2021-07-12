const activeTabReducer = (state = [], action)=>{
    switch (action.type){
        case 'SETSHELTERLIST':
            return action.payload
        default:
            return state
    }
}

export  default activeTabReducer