import {activeTabReducer, tabs} from "./activeTabReducer";

import {combineReducers} from "redux";

const allReducers = combineReducers({
    activeTab: activeTabReducer,
})

export default allReducers