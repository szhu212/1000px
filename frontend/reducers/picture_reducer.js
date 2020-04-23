import { RECEIVE_PICTURES, RECEIVE_PICTURE, REMOVE_PICTURE } from '../actions/picture_actions';

const pictureReducer = (state = {}, action) => {
    // debugger
    Object.freeze(state)
   
    switch (action.type) {
        case RECEIVE_PICTURES:
            // debugger
            return action.pictures
        case RECEIVE_PICTURE:
            return Object.assign({}, state, {[action.picture.id]: action.picture})
        case REMOVE_PICTURE:
            let nextState = Object.assign({}, state);
            delete nextState[action.pictureId]
            return nextState;
        default:
            return state;
    }
}

export default pictureReducer;