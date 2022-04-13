import { SET_ALL_PATIENTS } from "../types/patientActionTypes";

export const setAllPatients = (patientsArray) => ({
    type: SET_ALL_PATIENTS,
    payload: patientsArray
})