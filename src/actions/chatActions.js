const SendMessage = (message) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirebase().firestore();
        firestore.collection('chatmessage').add({
            ...message,
            timeS:new Date()
        }).then(()=> {
            dispatch({ type: 'Send_Message', message })}).catch((err) => {
                console.log(err);
            })
    }
}
export default SendMessage;