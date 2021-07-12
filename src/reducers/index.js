import {activeTabReducer} from "./activeTabReducer";
import activeOptionButtonReducer from "./optionButtonReducer";
import shelterReducer from "./shelterReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    activeTab: activeTabReducer,
    activeOptionButton: activeOptionButtonReducer,
    shelter: shelterReducer,
})

export default allReducers