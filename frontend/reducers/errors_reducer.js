import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import pictureErrorReducer from './picture_error_reducer';

const errorsReducer = combineReducers ({
    session_errors: sessionErrorsReducer,
    picture_errors: pictureErrorReducer
})

export default errorsReducer;