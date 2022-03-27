import { combineReducers } from "redux";
import patientReducer from "./patientReducer";

const rootReducer = combineReducers({
    patient: patientReducer
})

export default rootReducer