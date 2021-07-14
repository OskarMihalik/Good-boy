import {activeTabReducer} from "./activeTabReducer";
import activeOptionButtonReducer from "./optionButtonReducer";
import shelterReducer from "./shelterReducer";
import {combineReducers} from "redux";
import userInformationReducer from "./userInformation";

const allReducers = combineReducers({
    activeTab: activeTabReducer,
    activeOptionButton: activeOptionButtonReducer,
    shelter: shelterReducer,
    userInformation: userInformationReducer,
})

export default allReducers