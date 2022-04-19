import axios from "axios";

import { SET_ALL_PATIENTS } from "../types/patientActionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";

export const setAllPatients = (patientsArray) => ({
    type: SET_ALL_PATIENTS,
    payload: patientsArray
})

export const fetchAllPatients = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patients`, {headers: {authorization: token}})
            dispatch(requestSucceeded())
            const patients = res.data
            dispatch(setAllPatients(patients))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}