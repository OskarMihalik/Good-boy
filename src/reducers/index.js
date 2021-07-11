import {activeTabReducer} from "./activeTabReducer";
import activeOptionButtonReducer from "./optionButtonReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    activeTab: activeTabReducer,
    activeOptionButton: activeOptionButtonReducer
})

export default allReducers