import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session_actions';


const null_session = {
    id: null
}

export default (state = null_session, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.currentUser.id});
        case LOGOUT_CURRENT_USER:           
            return null_session;
        default:
            return state;
    }
}