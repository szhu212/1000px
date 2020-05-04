import * as LikeUtil from '../util/like_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

export const removeLike = like => ({
    type: REMOVE_LIKE,
    like
})

export const likePicture = pictureId => dispatch => {
    LikeUtil.likePicture(pictureId) 
    .then(like=> dispatch(receiveLike(like)))
}

export const unlikePicture = pictureId => dispatch => {
    LikeUtil.unlikePicture(pictureId)
    .then(like => dispatch(receiveUnlike(like)))
}