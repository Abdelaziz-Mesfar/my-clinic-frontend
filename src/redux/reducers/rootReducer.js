import { combineReducers } from "redux";

import appointmentReducer from "./appointmentsReducer";
import feedbackReducer from "./feedbackReducer";
import patientsReducer from "./patientsReducer";
import patientTeethDescriptionsReducer from "./patientTeethDescriptionsReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    patients: patientsReducer,
    feedback : feedbackReducer,
    user: userReducer,
    toothDescription: patientTeethDescriptionsReducer,
    appointments: appointmentReducer
})

export default rootReducer