import { RECEIVE_SEARCH, CLEAR_SEARCH } from '../actions/search_action'

export default (state = {}, action) => {
    // debugger
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_SEARCH:
            return action.search
         case CLEAR_SEARCH:
             return {};
    
        default:
            return state;
    }
}