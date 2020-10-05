import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import thunk from 'redux-thunk';
import { getFirestore, createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDvPg7OUxYV9OgF48g2ve8z4UsYVXz5Zqs",
  authDomain: "chatapp-9362e.firebaseapp.com",
  databaseURL: "https://chatapp-9362e.firebaseio.com",
  projectId: "chatapp-9362e",
  storageBucket: "chatapp-9362e.appspot.com",
  messagingSenderId: "752600529467",
  appId: "1:752600529467:web:305646a97b2394ce7b7a1e",
  measurementId: "G-30D8MFLWVL"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({});

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);
const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
  createFirestoreInstance
}
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
