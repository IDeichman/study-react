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

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogsItem name="Natalia" id="1" />
                <DialogsItem name="Alesya" id="2" />
                <DialogsItem name="Vika" id="3" />
            </div>
            <div className={c.messages}>
                <MessageItem message="Hi" />
                <MessageItem message="Hello!" />
                <MessageItem message="I'm here too!" />
            </div>
        </div>

    )
}
export default Dialogs;