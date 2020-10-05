const initState={}

const authReducer =(state=initState, action)=>{
    switch(action.type)
    {
        case 'LOGIN_SUCCESS':
            console.log("Success")
            return{
                ...state,
                authError:null
            }
        case 'LOGIN_ERROR':
            console.log("Error")
            return{
                ...state,
                authError: 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS':
            console.log("Logged out");
            return state
        case 'SIGNOUT_ERROR':
            console.log("error in logout");
            return state;
        default:
            return state;
    }
}
export default authReducer;