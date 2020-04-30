import * as UserUtil from '../util/user_utils';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS ='RECEIVE_ERRORS';
export const RECEIVE_AVATAR = 'RECEIVE_AVATAR';

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

export const receiveAvatar = avatar => ({
    type: RECEIVE_AVATAR,
    avatar
})

export const fetchUser = userId => dispatch => {
    return(
    UserUtil.fetchUser(userId).then((user) => { 
        dispatch(receiveUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
    )
};

export const createAvatar = avatar => dispatch => {
    return(
        UserUtil.createAvatar(avatar).then((avatar) => { 
            dispatch(receiveAvatar(avatar))
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
        )
}

export const updateAvatar = avatar => dispatch => {
    return(
        UserUtil.updateAvatar(avatar).then((avatar) => { 
            dispatch(receiveAvatar(avatar))
        }, err => (
            dispatch(receiveErrors(err.responseJSON))
        ))
        )
}
