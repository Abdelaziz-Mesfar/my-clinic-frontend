import axios from "axios";
import { SET_PATIENT_TOOTH_DESCRIPTION } from "../types/patientTeethDescriptionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";


export const setPatientToothDescription = (descriptionArray) => ({
    type: SET_PATIENT_TOOTH_DESCRIPTION,
    payload: descriptionArray
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