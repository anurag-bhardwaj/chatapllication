const initState={
    chat:[
        {id:'1', message:"hey this is a simple message"},
        {id:'2', message:"Hi a simple reply"}
    ]
}
export default function(state=initState,action)
{
    switch(action.type)
    {
        case 'Send_Message':
            console.log("message", action.message);
            return state
        default:
            return state;
    }
}