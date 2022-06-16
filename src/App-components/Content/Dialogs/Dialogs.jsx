import React from "react";
import d from './Dialogs.module.css'
import DialogItems from "./DialogItems/DialogItems";
import DialogsMessage from "./DialogItems/DialogsMessage";
import NewMessageContainer from "./DialogItems/newMessage/newMessageContainer";


class Dialogs extends React.Component {
    render() {

        let dialogItems =
            this.props.dialogPage.dialogUsers.map(u => (<DialogItems name={u.name} id={u.id}/>))


        let dialogsMessage =
            this.props.dialogPage.messageText.map(m => (<DialogsMessage id={m.id} text={m.text}/>))


        return (
            <div className={d.dialogs}>
                <div className={d.d1}>
                    {dialogItems}
                    <NewMessageContainer/>
                </div>
                <div className={d.d2}>
                    {dialogsMessage}
                </div>
            </div>
        )
    }
}


// const Dialogs = (props) => {
//
//
//
//
//
//     let dialogItems =
//         props.dialogPage.dialogUsers.map( u => (<DialogItems name={u.name} id={u.id} />))
//
//
//     let dialogsMessage=
//         props.dialogPage.messageText.map(m =>(<DialogsMessage id={m.id} text={m.text}/>))
//
//
//     return (
//         <div className={d.dialogs}>
//             <div className={d.d1}>
//             { dialogItems }
//                 <NewMessageContainer />
//             </div>
//             <div className={d.d2}>
//             { dialogsMessage }
//             </div>
//         </div>
//     )
// }


export default Dialogs;