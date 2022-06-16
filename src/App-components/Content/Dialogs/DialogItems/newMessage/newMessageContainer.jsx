import React from "react";
import {addMessageAC} from "../../../../../Redux/dialogs-reducer";
import NewMessage from "./newMessage";
import {connect} from "react-redux";




let mapStateToProps = (state) =>{
    return{
        messageBody: state.dialogReducer.messageBody
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendMessage: (newMessageBody) =>{
            dispatch(addMessageAC(newMessageBody))
        }
    }
}





const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps) (NewMessage);




    // let messageBodyOnchange = (newText) => {
    //     props.dispatch(updateMessageBodyAC(newText))
    // }
    //
    // let sendMessage = () => {
    //     props.dispatch(addMessageAC())
    // }
    //
    // return (<NewMessage messageBodyOnchange={messageBodyOnchange}
    //                     messageBody={props.messageBody} sendMessage={sendMessage}
    //     />)






export default NewMessageContainer;