import {activeTabReducer} from "./activeTabReducer";
import activeOptionButtonReducer from "./optionButtonReducer";
import shelterListReducer from "./shelterListReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    activeTab: activeTabReducer,
    activeOptionButton: activeOptionButtonReducer,
    shelterList: shelterListReducer,
})

export default allReducers