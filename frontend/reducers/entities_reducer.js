import {combineReducers } from 'redux';
import usersReducer from './users_reducer';
import pictureReducer from './picture_reducer';

const entitiesReducer = combineReducers ({
    users: usersReducer,
    pictures: pictureReducer
});

export default entitiesReducer;