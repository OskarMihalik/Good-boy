const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    agreeWithPersonalInformation: false
}

const userInformationReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SETFIRSTNAME':
            return{
                ...state,
                firstName: action.payload
            }
        case 'SETLASTNAME':
            return {
                ...state,
                lastName: action.payload
            }
        case ' SETEMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'SETPHONENUMBER':
            return {
                ...state,
                phoneNumber: action.payload
            }
        case 'SETUSERINFORMATION':
            return action.payload
        case 'SETAGREEWITHPERSONALINFORMATION':
            return {
                ...state,
                agreeWithPersonalInformation: action.payload
            }
        default:
            return state
    }
}

export default userInformationReducer