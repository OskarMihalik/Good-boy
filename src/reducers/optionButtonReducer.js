
const activeOptionButtonReducer = (state = false, action)=>{
    //false for hcem finančne prispieť celej nadácii
    //true for Chcem finančne prispieť konkrétnemu útulku
    switch (action.type){
        case 'SETACIVEBUTTON':
            return action.payload
        default:
            return state
    }
}

export default activeOptionButtonReducer