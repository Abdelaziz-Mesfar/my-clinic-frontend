import axios from "axios";
import { alertSuccess } from "../../utils/feedback";

import { ADD_PATIENT, REMOVE_PATIENT, SELECT_PATIENT, SET_ALL_PATIENTS, UPDATE_PATIENT } from "../types/patientActionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";

export const setAllPatients = (patientsArray) => ({
    type: SET_ALL_PATIENTS,
    payload: patientsArray
})

export const addPatient = (patient) => ({
    type: ADD_PATIENT,
    payload: patient
})

export const selectPatient = (patient) => ({
    type: SELECT_PATIENT,
    payload: patient
})

export const removePatient = (patientId) => ({
    type: REMOVE_PATIENT,
    payload: patientId
})

export const updatePatient = (patientId, data) => ({
    type: UPDATE_PATIENT,
    payload: { id: patientId, data }
})

export const fetchAllPatients = () => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patients`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            const patients = res.data
            dispatch(setAllPatients(patients))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestCreatingPatient = (data, history) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/patients`, data, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            if (res.data && res.data.patient && res.data.patient._id) {
                dispatch(addPatient({ ...data, _id: res.data.patient._id }))
                history.push('/patients')
            }
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const fetchPatientById = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patients/${id}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            const patient = res.data
            dispatch(selectPatient(patient))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestDeletingPatient = (patientId, closeModal) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            dispatch(requestStarted())
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/patients/${patientId}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            dispatch(removePatient(patientId))
            closeModal()
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestUpdatingPatient = (patientId, data, history) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            dispatch(requestStarted())
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/patients/${patientId}`, data, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
                history.push(`/patients/${patientId}`)
            }
            dispatch(updatePatient(patientId, data))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}