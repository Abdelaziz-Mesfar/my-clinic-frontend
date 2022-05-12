import { SET_ALL_APPOINTMENTS } from "../types/appointmentActionTypes";


const initialState = {
    all: [],
    selected: null
}

function appointmentReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ALL_APPOINTMENTS:
            return {
                ...state,
                all: action.payload
            };
    
        default:
            return state;
    }
}

export default appointmentReducer