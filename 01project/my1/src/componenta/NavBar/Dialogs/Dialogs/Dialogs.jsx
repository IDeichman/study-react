import React from "react";
import { NavLink } from "react-router-dom";
import c from './Dialogs.module.css'


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={c.dialog}>
            <NavLink to={path} activeClassName={c.active}> {props.name} </NavLink>
        </div>
    );
}
const MessageItem = (props) => {
    return <div className={c.message}>{props.message}</div>
}
let dialogsData = [
    { id: 1, name: 'Natallia M' },
    { id: 2, name: 'Alesya M' },
    { id: 3, name: 'Vika M' }
]

let messagesData = [
    { message: 'Hi' },
    { message: 'Hello' },
    { message: 'Yo' }
]
let dialogsElement = dialogsData.map((name) => <DialogsItem name={name.name} id={name.id} />);
let messageElement = messagesData.map((messages) => <MessageItem message={messages.message} />);

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                {dialogsElement}
            </div>
            <div className={c.messages}>
                {messageElement}
            </div>
        </div>

    )
}
export default Dialogs;