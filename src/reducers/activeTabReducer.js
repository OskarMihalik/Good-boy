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
const initialOb = {
    tabsIndex: 0,
    tabs: tabs,
}

const activeTabReducer = (state = initialOb, action)=>{
    switch (action.type){
        case 'NEXTTAB':
            return {
                ...state,
                tabsIndex: state.tabsIndex + 1
            }
        case 'PREVIOUSTAB':
            return {
                ...state,
                tabsIndex: state.tabsIndex - 1
            }
        default:
            return state
    }
}

export  {activeTabReducer, tabs}