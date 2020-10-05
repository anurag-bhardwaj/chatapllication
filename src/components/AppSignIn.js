import React, { Component } from 'react';
import {connect } from 'react-redux';
import {signIn} from '../actions/authActions';    

class AppSignIn extends Component {
    state={
        email:"",
        password:""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }
    render() {
        return (
            <div className="container" style={{ width: "90%" }}>
                <form style={{ textAlign: "start" }} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:"40%", marginLeft:"30%"}}>Submit</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        signIn: (creds)=>dispatch(signIn(creds))
    }
}
export default connect(null, mapDispatchToProps)(AppSignIn);
