import { ADD_PATIENT, REMOVE_PATIENT, SELECT_PATIENT, SET_ALL_PATIENTS, UPDATE_PATIENT } from "../types/patientActionTypes";

const initialState = {
  all: [],
  selected: null
}

function patientsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_PATIENTS:
      return {
        ...state,
        all: action.payload
      }
    case SELECT_PATIENT:
      return {
        ...state,
        selected: action.payload
      }
    case ADD_PATIENT:
      return {
        ...state,
        all: [...state.all, action.payload]
      }
    case REMOVE_PATIENT:
      return {
        ...state,
        all: state.all.filter(patient => patient._id !== action.payload)
      }
    case UPDATE_PATIENT:
      return {
        ...state,
        all: state.all.map(patient => patient._id === action.payload._id ? { ...patient, ...action.payload.data } : patient)
      }
    default:
      return state;
  }
}

export default patientsReducer