import {RECEIVE_SESSION_ERRORS} from '../actions/error_action';
import {CLEAR_ERRORS} from '../actions/error_action';

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors
            // return Object.assign({},state, {errors: errors})
        case CLEAR_ERRORS:
            return []
        default:
            return state  
    }
}