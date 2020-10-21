import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'

export default (state = {}, action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state);
    let pictureId 
    switch (action.type) {
        case RECEIVE_LIKE:
            nextState[action.like.id] = action.like
            return nextState
        case REMOVE_LIKE:
            let deletedId = action.like.id
            delete nextState[deletedId]
            return nextState
        default:
            return state;
    }

}
