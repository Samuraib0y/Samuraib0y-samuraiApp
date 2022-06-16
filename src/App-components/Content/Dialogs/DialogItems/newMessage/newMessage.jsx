import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../Utils/validation/validator";
import {Textarea} from "../../../../../Media/FormControls/FormControls";


let maxLength =  maxLengthCreator(15)


const NewMessage = (props) => {

    // let newMessageElement = React.createRef();
    //
    //
    // let messageBodyOnchange = () => {
    //     let newText = newMessageElement.current.value;
    //     props.messageBodyOnchange(newText)
    // }
    //
    // let sendMessage = () => {
    //     props.sendMessage()
    // }

    let addM = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div>
            <AddMessageFormRedux onSubmit={addM} />
            {/*<textarea onChange={messageBodyOnchange} ref={newMessageElement}*/}
            {/*          value={props.messageBody}*/}
            {/*/>*/}
            {/*<button onClick={sendMessage}> Send Message</button>*/}
        </div>
    )
}


const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength ]} name='newMessageBody' placeholder='Write message'/>
            </div>
            <div>
                <button> Send Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)

export default NewMessage;