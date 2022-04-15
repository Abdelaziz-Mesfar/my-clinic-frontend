import { LOGIN, LOGOUT } from "../types/userTypes"

const initialState = {
    isAuth: false,
    user: null,
    token: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuth: true,
                user: action.payload.user,
                token: action.payload.token
            }
        case LOGOUT:
            return initialState
        default:
            return state;
    }
}

export default userReducer