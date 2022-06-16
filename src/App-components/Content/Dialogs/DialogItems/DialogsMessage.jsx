import React from "react";
import dm from './DialogsMessage.module.css'


const DialogsMessage = (props) => {

    return (
        <div className={dm.dialogsMessage}>
            { props.text }
        </div>
    )
}


export default DialogsMessage;