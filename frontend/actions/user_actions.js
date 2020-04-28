import * as UserUtil from '../util/user_utils';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS ='RECEIVE_ERRORS';

export const receiveUser = user => {
    
    return {
        type: RECEIVE_USER,
        user
    }
};

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchUser = userId => dispatch => {
    return(
    UserUtil.fetchUser(userId).then((user) => { 
        dispatch(receiveUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
    )
};