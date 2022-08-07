import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
 import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { widthAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

<DialogItem />;

<Message />;


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody)=>{     
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

// let AuthRedirectComponent = (props) =>{
//     if (!this.props.isAuth) return <Navigate to='/login' />
//     return <Dialogs {...props}/>
// }
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    widthAuthRedirect
)(Dialogs);



