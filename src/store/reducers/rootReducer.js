import authReducer from './authReducer';
import projectReducer from './projectReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; //syncing firestore data with state in background
import { firebaseReducer } from 'react-redux-firebase';
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //sync our data
    firebase: firebaseReducer
});

export default rootReducer