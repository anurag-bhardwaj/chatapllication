import React from 'react'
import { connect } from 'react-redux';
import { signOut } from '../actions/authActions';
function NavBar(props) {
    const links = props.auth.uid ? (<li style={{cursor:"pointer"}} className="nav-item active">
        <a className="nav-link" onClick={props.signOut} style={{color:"white"}}>SignOut</a>
    </li>) : (null)
    return (
        <div style={{ height: '10vh' }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container" style={{ width: "90%"}}>
                    <a className="navbar-brand" href="/" style={{color:"white"}}>ChatApp</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor:"lightgreen"}}>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                        <ul className="navbar-nav ml-auto">
                            {links}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);