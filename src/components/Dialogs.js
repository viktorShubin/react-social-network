import s_dialogs from "../scc-modules/dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (<div className={s_dialogs.dialog}>
        <NavLink to={'/message/' + props.id}>{props.user}</NavLink>
    </div>)
}

const Message = (props) => {
    return (
        <div className={s_dialogs.message}>
            {props.messageText}
        </div>
    )
}

const Dialogs = (props) => {


    let dialogElement = props.dialogsObj.map((item) => {
        console.log(item.id);
        return <DialogItem user={item.name} id={item.id}/>
    })


    const messageMap = props.mess.map((item) => {
        return <Message id={item.id} messageText={item.messageText}/>
    })

    return (
        <div className={s_dialogs.dialogs}>
            <div className={s_dialogs.dialogsItem}>

                {dialogElement}


            </div>
            <div className={s_dialogs.messages}>
                {messageMap}
            </div>
        </div>

    )
}

export default Dialogs;