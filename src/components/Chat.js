import React from 'react';
import './chatHome.css';
import {connect} from 'react-redux';
function Chat(props) {
    console.log(props)
    var strVal=props.chat.userMessage;
    const cls = props.auth.uid===props.chat.uid ? ("sent") : ("receive");
    var chatstr="";
    const myfunc= ()=>{
        let cnt=0;
        for(let i=0;i<strVal.length;i++)
        {
            if(strVal[i]===' ')
            {
                cnt=0;
            }
            else
            {
                cnt++;
            }
            if(cnt>=18)
            {
                chatstr+=' ';
                cnt=0;
            }
            chatstr+=strVal[i];
        }
    }
    return (
        <div>
            {myfunc()}
            <div className="message">
                <div className={`${cls}`}>
                    <p>
                        {chatstr}
                    </p>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Chat);
