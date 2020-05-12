import * as SearchUtil from '../util/search_util';
import { receivePictures } from './picture_actions';

export const RECEIVE_SEARCH = 'RECEIVE_SEARCH'
export const CLEAR_SEARCH = 'CLEAR_SEARCH'

export const receiveSearch = search => ({
    type: RECEIVE_SEARCH,
    search
})

export const clearSearch = () => ({
    type: CLEAR_SEARCH ,
})

export const search = (input) => dispatch => {
    return SearchUtil.search(input)
    .then(search => dispatch(receiveSearch(search)))
}

export const submitSearch = (input) => dispatch => {
    return SearchUtil.search(input)
    .then(search => dispatch(receivePictures(search)))
}