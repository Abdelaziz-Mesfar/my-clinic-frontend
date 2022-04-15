import { alertError, alertSuccess } from "../../utils/feedback";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCEEDED } from "../types/feedbackTypes";


export const requestStarted = () => ({
    type: REQUEST_STARTED
})

export const requestSucceeded = () => ({
    type: REQUEST_SUCCEEDED
})

// export const requestFailed = (errorMessage) => {
//     if (errorMessage){
//         alertError(errorMessage)
//     }
//     return {
//         type: REQUEST_FAILED,
//         payload: errorMessage
//     }
// }
export const requestFailed = (err) => {
    let errorMessage = err.message || "Request failed"
    if (err && err.response && err.response.data && err.response.data.error && typeof(err.response.data.error) === 'string') {
        errorMessage = err.response.data.error
    }
    if (err && err.response && err.response.data && err.response.data.error && err.response.data.error.details) {
        errorMessage =  err.response.data.error.details[0] && err.response.data.error.details[0].message
    }
    alertError(errorMessage)
    return {
        type: REQUEST_FAILED,
        payload: errorMessage
    }
}
