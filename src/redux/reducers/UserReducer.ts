import { UserActionTypes, UserActions } from "../actions/UserActions"

interface UserAccReducerState {
    loader: boolean,
    response: any[],
    errorMsz: string
}

const initialState: UserAccReducerState = {
    loader: false,
    response: [],
    errorMsz: ''
}

export const UserReducer = (action: any, state = initialState): UserAccReducerState => {
    switch (action.type) {
        case UserActionTypes.USER_ACCOUNT_DETAILS_REQUEST: {
            return {
                ...state,
                loader: true
            }
        }
        case UserActionTypes.USER_ACCOUNT_DETAILS_SUCCESS: {
            return {
                ...state,
                response: action.payload,
            }
        }
        case UserActionTypes.USER_ACCOUNT_DETAILS_ERROR: {
            return {
                ...state,
                errorMsz: action.payload
            }
        }
        default: {
            return state
        }
    }
}