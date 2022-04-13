import { combineReducers } from "redux";
import patientsReducer from "./patientsReducer";

const rootReducer = combineReducers({
    patients: patientsReducer
})

export default rootReducer