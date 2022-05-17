import { ADD_APPOINTMENT, SELECT_APPOINTMENT, SET_ALL_APPOINTMENTS } from "../types/appointmentActionTypes";


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
        case ADD_APPOINTMENT: 
            return {
                ...state,
                all: [...state.all, action.payload]
            }
        case SELECT_APPOINTMENT: 
            return {
                ...state,
                selected: action.payload
            }
    
        default:
            return state;
    }
}

export default appointmentReducer