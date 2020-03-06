import * as APIUtil from '../components/util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'; 
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveCurrentUser = (currentUser) =>({
    type: 'RECEIVE_CURRENT_USER',
    currentUser
})

const logoutCurrentUser = () =>({
    type: 'LOGOUT_CURRENT_USER',
})

export const receiveSessionErrors = (errors) => ({
    type: 'RECEIVE_SESSION_ERRORS',
    errors // errors is an array
})

export const clearErrors = () => ({
    type: 'CLEAR_ERRORS',
})

export const loginUser = (formUser) => dispatch =>(
    APIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (
        dispatch(receiveSessionErrors(err.responseJSON))
      ))
)

export const logoutUser = () => dispatch => {
    APIUtil.logout()
    .then(dispatch(logoutCurrentUser()));
}

export const signupUser = (formUser) => dispatch => (
    APIUtil.signup(formUser)
    .then(user => dispatch(receiveSessionCurrentUser(user)),
    err => (
        dispatch(receiveSessionErrors(err.responseJSON)))
    )
)

