import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import AppSignIn from './components/AppSignIn';
import ChatHome from './components/ChatHome';
import {connect} from 'react-redux';

function App(props) {
    const links= props.auth.uid ? (<ChatHome/>):(<AppSignIn />)
    return (
        <div className="App"  style={{height:'100vh'}}>
            <NavBar />
            {links}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(App);