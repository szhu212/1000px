import {RECEIVE_PICTURE_ERRORS, CLEAR_ERRORS} from '../actions/picture_actions';


export default (state = [], action) => {
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_PICTURE_ERRORS:
            return action.errors || state
        case CLEAR_ERRORS: 
            return []
        default:
            return state  
    }
}