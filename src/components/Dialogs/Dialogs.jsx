import React from "react";
import { Navigate } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { TextArea } from "../common/FormsControls/FormsControls";
import { maxLenghtCreator, required } from "../../units/validators/validators";

<DialogItem />;

<Message />;

const Dialogs = (props) => {

    // let dialogs = [
    //     { id: 1, name: 'Vadym' },
    //     { id: 2, name: 'Klaudia' },
    //     { id: 3, name: 'Maksim' }
    // ];
    // let messages = [
    //     { id: 1, message: 'Hi' },
    //     { id: 2, message: 'How a you' },
    //     { id: 3, message: 'Yo' }
    // ];

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // }
    // let onNewMessageChange = (e) => {
    //     let body = e.target.value;
    //     props.updateNewMessageBody(body);
    // }

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to="/login" />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={ addNewMessage } />

            </div>
        </div>
    )
}
const maxLenght100 = maxLenghtCreator(100);
const AddMessageForm = (props) => {
    return <form action="" onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder="Enter your message" name="newMessageBody" component={TextArea} 
            validate = {[required, maxLenght100]}/>
        </div>
        <div> <button>Send</button> </div>
    </form>
} 


const AddMessageFormRedux = reduxForm({form: 'dialogMessageForm'})(AddMessageForm)

export default Dialogs;