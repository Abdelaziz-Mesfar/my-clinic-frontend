import { combineReducers } from "redux";

import feedbackReducer from "./feedbackReducer";
import patientsReducer from "./patientsReducer";
import patientTeethDescriptionsReducer from "./patientTeethDescriptionsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    patients: patientsReducer,
    feedback : feedbackReducer,
    user: userReducer,
    toothDescription: patientTeethDescriptionsReducer
})

export default rootReducer