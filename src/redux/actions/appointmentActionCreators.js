import axios from "axios";
import { SET_ALL_APPOINTMENTS } from "../types/appointmentActionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";


export const setAllAppointments = (appointmentsArray) => ({
    type: SET_ALL_APPOINTMENTS,
    payload: appointmentsArray
})

export const fetchAllAppointments = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/appointments`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            const appointments = res.data
            dispatch(setAllAppointments(appointments))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}