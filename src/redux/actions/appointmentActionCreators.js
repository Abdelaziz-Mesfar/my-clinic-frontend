import axios from "axios";
import { alertSuccess } from "../../utils/feedback";
import { ADD_APPOINTMENT, SELECT_APPOINTMENT, SET_ALL_APPOINTMENTS, RESET_SELECTED_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT } from "../types/appointmentActionTypes";
import { requestFailed, requestStarted, requestSucceeded } from "./feddbackActionCreators";


export const setAllAppointments = (appointmentsArray) => ({
    type: SET_ALL_APPOINTMENTS,
    payload: appointmentsArray
})

export const addAppointment = (appointment) => ({
    type: ADD_APPOINTMENT,
    payload: appointment
})

export const selectAppointment = (appointment) => ({
    type: SELECT_APPOINTMENT,
    payload: appointment
})

export const resetSelectedApppointment = () => ({
    type: RESET_SELECTED_APPOINTMENT
})

export const updateAppointment = (appointmentId, data) => ({
    type: UPDATE_APPOINTMENT,
    payload: {id: appointmentId, data}
})

export const removeAppointment = (id) => ({
    type: DELETE_APPOINTMENT,
    payload: id
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

export const requestCreatingAppointment = (data, history, patientId) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/appointments/${patientId}`, data, { headers: { authorization: token } })
            if (res.data && res.data.message) {
                alertSuccess(res.data.message)
            }
            if (res.data && res.data.appointment && res.data.appointment._id) {
                dispatch(addAppointment({ ...data, _id: res.data.appointment._id }))
                history.push('/dashboard')
            }
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const fetchAppointmentById = (id) => {
    return async (dispatch, getState) => {
        const state = getState();
        const token = state.user.token;
        try {
            dispatch(requestStarted())
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/appointments/${id}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            const appointment = res.data
            dispatch(selectAppointment(appointment))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestUpdatingAppointment = (obj, data) => {
    return async (dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.put(`${process.env.REACT_APP_API_URL}/appointments/${obj.patientId}/${obj.appointmentId}`, {...data, _id: undefined, user: undefined, __v:undefined, patient: undefined}, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if(res.data && res.data.message){
                alertSuccess(res.data.message)
            }
            dispatch(updateAppointment(obj.appointmentId, data))
            dispatch(fetchAllAppointments())
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}

export const requestDeletingAppointment = (appointmentId) => {
    return async(dispatch, getState) => {
        const state = getState()
        const token = state.user.token
        try {
            dispatch(requestStarted())
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/appointments/${appointmentId}`, { headers: { authorization: token } })
            dispatch(requestSucceeded())
            if(res.data && res.data.message){
                alertSuccess(res.data.message)
            }
            dispatch(removeAppointment(appointmentId))
        } catch (error) {
            dispatch(requestFailed(error))
        }
    }
}