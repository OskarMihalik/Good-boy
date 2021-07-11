import Checking from "../components/Checking";
import Info from "../components/Info";
import Intro from "../components/Intro";

const IntroOb = {
    key: 'Intro',
    element: <Intro/>
}
const InfoOb = {
    key: 'Info',
    element: <Info/>
}
const CheckingOb = {
    key: 'Checking',
    element: <Checking/>
}

const tabs = [IntroOb, InfoOb, CheckingOb]

const activeTabReducer = (state = tabs[0], action)=>{
    switch (action.type){
        case 'SETACTIVETAB':
            return action.payload
        default:
            return state
    }
}

export  {activeTabReducer, tabs}