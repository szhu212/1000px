import { RECEIVE_PICTURES, RECEIVE_PICTURE, REMOVE_PICTURE, RECEIVE_USER_PICTURES } from '../actions/picture_actions';

export default (state = {}, action) => {
    // debugger
    Object.freeze(state)
   
    switch (action.type) {
        case RECEIVE_PICTURES:
            // debugger
            return action.pictures
        case RECEIVE_PICTURE:
            return Object.assign({}, state, {[action.picture.id]: action.picture})
        case RECEIVE_USER_PICTURES:
            return Object.assign({}, state, action.userPictures)
        case REMOVE_PICTURE:
            debugger
            let nextState = Object.assign({}, state);
            delete nextState[action.pictureId]
            debugger
            return nextState;
        default:  
            return state;
    }
}
