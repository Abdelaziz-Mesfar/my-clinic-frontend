import { combineReducers } from "redux";

import feedbackReducer from "./feedbackReducer";
import patientsReducer from "./patientsReducer";

const rootReducer = combineReducers({
    patients: patientsReducer,
    feedback : feedbackReducer
})

export default rootReducer