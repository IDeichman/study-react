import React from "react";
import { BrowserRouter, NavLink, Routes } from "react-router-dom";
import c from './Dialogs.module.css'

const Dialogs = () => {
    return (

        <div className={c.dialogs}>
            <div className={c.dialogItems}>

                <div className={c.dialog}>
                    <NavLink to='/natallia' activeClassName={c.active}> Natallia</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/alesya' activeClassName={c.active}>Alesya</NavLink>
                </div>
                <div className={c.dialog}>
                    <NavLink to='/vika' activeClassName={c.active}>Vika</NavLink>
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>
                    Hi
                </div>
                <div className={c.message}>
                    Hello
                </div>
                <div className={c.message}>
                    i'm here
                </div>
            </div>
        </div>

    )
}
export default Dialogs;