import { combineReducers } from "redux";

import feedbackReducer from "./feedbackReducer";
import patientsReducer from "./patientsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    patients: patientsReducer,
    feedback : feedbackReducer,
    user: userReducer
})

export default rootReducer