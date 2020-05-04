import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'

const LikesReducer = (state = {}, action) => {
    debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_LIKE:
            let pictureId = action.like.picture_id;  
            return Object.assign({}, state, {[pictureId]: action.like.liker_id})
        case REMOVE_LIKE:
            let nextState = Object.assign({}, state);
            let pictureId = action.like.picture_id; 
            delete 
        default:
            break;
    }

}