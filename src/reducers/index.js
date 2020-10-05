import {combineReducers} from 'redux';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
export default combineReducers({
    auth: authReducer,
    chats :chatReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
})