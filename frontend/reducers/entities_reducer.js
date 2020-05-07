import {combineReducers } from 'redux';
import usersReducer from './users_reducer';
import pictureReducer from './picture_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    pictures: pictureReducer,
    likes: likesReducer,
});

export default entitiesReducer;