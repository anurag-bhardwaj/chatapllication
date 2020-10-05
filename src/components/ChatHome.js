import React, { Component } from 'react';
import './chatHome.css';
import { connect } from 'react-redux';
import Chat from './Chat';
import SendMessage from '../actions/chatActions';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class ChatHome extends Component {
    state = {
        userMessage: "",
        uid:this.props.auth.uid
    }
    myRef = React.createRef()
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userMessage:this.state.userMessage,
            uid: this.props.auth.uid
        })
        this.myRef.current.scrollIntoView({ block:'start' , behavior: 'smooth' })
        if(this.state.userMessage){
            this.props.SendMessage(this.state)
        }
        this.setState({
            userMessage: ""
        })
    }
    componentDidUpdate()
    {
        this.myRef.current.scrollIntoView({ block:'start' , behavior: 'smooth' })
    }
    render() {
        if (this.props.messages) {
            return (
                <div style={{ height: "83vh", width: "100%", textAlign: "start" }}>
                    <div className="show-message">
                        
                        {[...this.props.messages].reverse().map(msg => (
                            <Chat key={msg.id} chat={msg} />)
                        )}
                        <span ref={this.myRef}></span>
                    </div>
                    <div className="send-message">
                        <form className="write-message" onSubmit={this.handleSubmit}>
                            <input className="write-here" type="text" id="userMessage" value={this.state.userMessage} onChange={this.handleChange} />
                            <input type="submit" className="btn" value="send" />
                        </form>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div style={{ height: "83vh", width: "100%", textAlign: "start" }}>
                    <div className="show-message">
                        
                        <span ref={this.myRef}></span>
                    </div>
                    <div className="send-message">
                        <form className="write-message">
                            <input className="write-here" type="text" id="userMessage" value={this.state.userMessage} onChange={this.handleChange} />
                            <input type="submit" className="btn" value="send" />
                        </form>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    // console.log(state.firestore.ordered.chatmessage)
    return {
        messages: state.firestore.ordered.chatmessage,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        SendMessage: (msg) => dispatch(SendMessage(msg))
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'chatmessage', orderBy:['timeS', 'desc'], limit:20 }
    ]))(ChatHome)
