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

export const likePicture = like => dispatch => {
    LikeUtil.likePicture(like) 
    .then(like=> dispatch(receiveLike(like)))
}

export const unlikePicture = likeId => dispatch => {
    LikeUtil.unlikePicture(likeId)
    .then(like => dispatch(removeLike(like)))
}  