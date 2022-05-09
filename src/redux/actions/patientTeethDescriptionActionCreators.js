import axios from "axios";

import { alertSuccess } from "../../utils/feedback";
import { ADD_TOOTH_DESCRIPTION, DELETE_TOOTH_DESCRIPTION, SET_PATIENT_TOOTH_DESCRIPTION, UPDATE_TOOTH_DESCRIPTION } from "../types/patientTeethDescriptionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";


export const setPatientToothDescription = (descriptionArray) => ({
    type: SET_PATIENT_TOOTH_DESCRIPTION,
    payload: descriptionArray
})

export const addToothDesription = (description) => ({
    type: ADD_TOOTH_DESCRIPTION,
    payload: description
})

export const deleteToothDescription = (descriptionId) => ({
    type: DELETE_TOOTH_DESCRIPTION,
    payload: descriptionId
})

export const updateToothDescription = (descriptionId, data) => ({
    type: UPDATE_TOOTH_DESCRIPTION,
    payload: {id: descriptionId, data}
})

export const fetchToothDescriptions = (patientId, toothId) => {
    console.log({ patientId, toothId });
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patient-tooth/${patientId}/${toothId}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            const toothDescription = res.data
            console.log({ toothDescription });
            dispatch(setPatientToothDescription(toothDescription))
        } catch (error) {
            dispatch(requestFailed(error))
        }

    }
}

export const requestCreatingNewDescription = (data, patientId, toothId) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            dispatch(requestStarted())
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/patient-tooth/${patientId}/${toothId}`, data, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            console.log({ res: res.data });
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            if (res.data && res.data.tooth && res.data.tooth._id) {
                dispatch(addToothDesription({ ...data, _id: res.data.tooth._id }))
            }
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestDeletingToothDescription = (obj, closeModal) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            dispatch(requestStarted())
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/patient-tooth/${obj.patientId}/${obj.toothId}/${obj.descriptionId}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            dispatch(deleteToothDescription(obj.descriptionId))
            closeModal()
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestUpdatingToothDescription = (obj, data) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/patient-tooth/${obj.patientId}/${obj.toothId}/${obj.editDescriptionId}`, data, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            dispatch(updateToothDescription(obj.editDescriptionId, data))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}