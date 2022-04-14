import { alertError, alertSuccess } from "../../utils/feedback";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCEEDED } from "../types/feedbackTypes";


export const requestStarted = () => ({
    type: REQUEST_STARTED
})

export const requestSucceeded = () => ({
    type: REQUEST_SUCCEEDED
})

export const requestFailed = (errorMessage) => {
    if (errorMessage){
        alertError(errorMessage)
    }
    return {
        type: REQUEST_FAILED,
        payload: errorMessage
    }
}
