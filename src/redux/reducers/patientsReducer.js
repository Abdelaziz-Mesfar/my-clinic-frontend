import { ADD_PATIENT, SET_ALL_PATIENTS } from "../types/patientActionTypes";

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
    case ADD_PATIENT: 
      return {
        ...state,
        all: [...state.all, action.payload]
      }  
    default:
      return state;
  }
}

export default patientsReducer