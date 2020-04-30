import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_AVATAR  } from '../actions/user_actions'

export default (state = {}, action) => {
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        case RECEIVE_USER:
            return Object.assign({}, state, {[action.user.id] : action.user})
        case RECEIVE_AVATAR:
            const userId = action.avatar.id
            return Object.assign({}, state, {[userId] : state[userId]})
        default:
            return state
    }
}
