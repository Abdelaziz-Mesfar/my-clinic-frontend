import axios from "axios";

import { alertSuccess } from "../../utils/feedback";
import { ADD_TOOTH_DESCRIPTION, SET_PATIENT_TOOTH_DESCRIPTION } from "../types/patientTeethDescriptionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";


export const setPatientToothDescription = (descriptionArray) => ({
    type: SET_PATIENT_TOOTH_DESCRIPTION,
    payload: descriptionArray
})

export const addToothDesription = (description) => ({
    type: ADD_TOOTH_DESCRIPTION,
    payload: description
})

export const fetchToothDescriptions = (patientId, toothId) => {
    console.log({ patientId, toothId });
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/patient-tooth/${patientId}/${toothId}`, { headers: {authorization: token} })
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
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/patient-tooth/${patientId}/${toothId}`, data, { headers: {authorization: token} })
            dispatch(requestSucceeded())
            console.log({res: res.data});
            if (res.data && res.data.message){
                alertSuccess(res.data.message)
            }
            if (res.data && res.data.tooth && res.data.tooth._id){
                dispatch(addToothDesription({...data, _id: res.data.tooth._id}))
            }
        } catch (error) {
            
        }
    }
}