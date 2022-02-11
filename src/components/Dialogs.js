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

    let dialogsObj = [
        {id: 1, name: 'Viktor'},
        {id: 2, name: 'Oleg'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Senya'},
    ]


    let dialogElement = dialogsObj.map((item) => {
        console.log(item.id);
        return <DialogItem user={item.name} id={item.id}/>
    })

    const mess = [
        {id:1,messageText:'Алжа хелоу'},
        {id:2,messageText:'Алжа не мороси'},
        {id:3,messageText:'Алжа ду ю вонт'},
        {id:4,messageText:'Алжа лох'},
        {id:5,messageText:'Алжа го мани'},
        {id:6,messageText:'Алжа хелоу'},
    ]

    const messageMap = mess.map((item) => {
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