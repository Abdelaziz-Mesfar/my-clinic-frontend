import axios from "axios";
import { SET_ALL_PATIENTS } from "../types/patientActionTypes";

export const setAllPatients = (patientsArray) => ({
    type: SET_ALL_PATIENTS,
    payload: patientsArray
})

export const fetchAllPatients = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patients`)
            const patients = res.data
            dispatch(setAllPatients(patients))
        } catch (error) {
            console.log({ error });
        }
    }
}