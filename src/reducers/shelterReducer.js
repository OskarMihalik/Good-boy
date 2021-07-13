const buttons = [
    {
        money: 5,
        // active: false,
        input: false
    },
    {
        money: 10,
        // active: false,
        input: false
    },
    {
        money: 20,
        // active: false,
        input: false
    },
    {
        money: 30,
        // active: false,
        input: false
    },
    {
        money: 50,
        // active: false,
        input: false
    },
    {
        money: 100,
        // active: false,
        input: false
    },
    {
        money: '',
        // active: false,
        input: true
    }]

const initialState = {
    selectedShelterId: 0,
    shelterList: [],
    moneyButtonChosenIndex: -1,
    moneyButtons: buttons
}

const shelterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SETSHELTERLIST':
            return {
                ...state,
                shelterList: action.payload
            }
        case 'SETSELECTEDSHELTERID':
            return {
                ...state,
                selectedShelterId: action.payload,
            }
        case 'SETMONEYBUTTONCHOSENINDEX':
            return {
                ...state,
                moneyButtonChosenIndex: action.payload
            }
        case 'SETSHELTER':
            return action.payload
        default:
            return state
    }
}

export default shelterReducer