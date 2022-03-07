import { ActionTypes } from '../Constants/constant';

export default (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.LOGGED_IN: {
            return { ...state, userDetails: action.paylaod.userInfo }
        }
        case ActionTypes.LOGGED_OUT: {
            return { ...state, userDetails: [] }
        }
        default:
            return state;
    }
}