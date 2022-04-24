import { ADD_TOOTH_DESCRIPTION, SET_PATIENT_TOOTH_DESCRIPTION } from "../types/patientTeethDescriptionTypes";

const initialState = {
    all: [],
    selected: null
}

function patientTeethDescriptionsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PATIENT_TOOTH_DESCRIPTION:
            return {
                ...state,
                all: action.payload
            };
        case ADD_TOOTH_DESCRIPTION :
            return {
                ...state,
                all: [...state.all, action.payload]
            };    
        default:
            return state;
    }
}

export default patientTeethDescriptionsReducer