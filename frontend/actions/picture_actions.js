import * as PictureUtil from '../util/picture_util';

export const RECEIVE_PICTURES = "RECEIVE_PICTURES";
export const RECEIVE_PICTURE = "RECEIVE_PICTURE";
export const REMOVE_PICTURE = "REMOVE_PICTURE";
export const RECEIVE_PICTURE_ERRORS = 'RECEIVE_PICTURE_ERRORS'; 
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_USER_PICTURES = "RECEIVE_USER_PICTURES"


export const receivePictures = (pictures) => {
    // debugger
    return{
        type: RECEIVE_PICTURES,
        pictures
    }
}

export const receivePicture = (picture) => ({
    type: RECEIVE_PICTURE,
    picture
})

export const removePicture = (pictureId) => ({
    type: REMOVE_PICTURE,
    pictureId
})

export const receivePictureErrors = (errors) => {
    // debugger
    return{
        type: RECEIVE_PICTURE_ERRORS,
        errors
    }
}

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const receiveUserPictures = (userid) => ({
    type: RECEIVE_USER_PICTURES,
    userPictures
})


export const fetchPictures = () => dispatch => (
    PictureUtil.fetchPictures()
    .then(pictures => dispatch(receivePictures(pictures)))
)

export const fetchPicture = picId => dispatch => (
    PictureUtil.fetchPicture(picId)
    .then(picture => dispatch(receivePicture(picture)))
)

export const createPicture = (formPic) => dispatch => (
    PictureUtil.createPicture(formPic)
    .then(pic => dispatch(receivePicture(pic)),
    err => (
        dispatch(receivePictureErrors(err.responseJSON))
      )) 
)

export const updatePicture = (formPic) => dispatch => (
    PictureUtil.updatePicture(formPic)
    .then(pic => dispatch(receivePicture(pic))) 
)

export const deletePicture = (picId) => dispatch => (
    PictureUtil.deletePicture(picId)
    .then(pic => dispatch(removePicture(pic))) 
)

export const fetchUserPictures = (userId) => dispatch => {
    PictureUtil.fetchUserPictures(userId)
    .then(pictures => dispatch(receivePictures(pictures)))
}



