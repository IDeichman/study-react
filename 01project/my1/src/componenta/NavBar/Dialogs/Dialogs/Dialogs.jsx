import React from "react";
import c from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogItems}>
                <div className={c.dialog}>
                    Natallia
                </div>
                <div className={c.dialog}>
                    Alesya
                </div>
                <div className={c.dialog}>
                    Vika
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