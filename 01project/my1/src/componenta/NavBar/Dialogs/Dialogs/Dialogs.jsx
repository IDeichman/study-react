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
    let dialogsData= [
        {id:1 , name:'Natallia M' },
        {id:2 , name:'Alesya M' },
        {id:3 , name:'Vika M'}
    ]

    let messagesData=[
        {message:'Hi'},
        {message:'Hello'},
        {message:'Yo'}
    ]

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <DialogsItem  name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem  name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem  name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={c.messages}>
                <MessageItem message={messagesData[0].message} />
                <MessageItem message={messagesData[1].message} />
                <MessageItem message={messagesData[2].message} />
            </div>
        </div>

    )
}
export default Dialogs;