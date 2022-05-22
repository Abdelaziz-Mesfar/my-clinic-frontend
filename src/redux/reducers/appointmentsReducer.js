import { ADD_APPOINTMENT, SELECT_APPOINTMENT, SET_ALL_APPOINTMENTS, RESET_SELECTED_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT } from "../types/appointmentActionTypes";


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
        case RESET_SELECTED_APPOINTMENT:
            return {
                ...state,
                selected: null
            }
        case UPDATE_APPOINTMENT:
            return {
                ...state,
                all: state.all.map(appointment => appointment._id === action.payload._id ? { ...appointment, ...action.payload.data } : appointment)
            }
        case DELETE_APPOINTMENT:
            return {
                ...state,
                all: state.all.filter(appointment => appointment._id !== action.payload)
            }

        default:
            return state;
    }
}

export default appointmentReducer