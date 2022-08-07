import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you', likeCount: 2 },
                { id: 2, message: 'Its my first post!', likeCount: 3 },
            ],
            newPostText: 'Napisz text'
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How a you' },
                { id: 3, message: 'Yo' }
            ],
            dialogs: [
                { id: 1, name: 'Vadym' },
                { id: 2, name: 'Klaudia' },
                { id: 3, name: 'Maksim' }
            ],
            newMessageBody: ''

        
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state change');
    },
    getState() {
        return this._state;
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },
    dispatch(action) {

        this._state.profilePage=  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=  dialogReducer (this._state.dialogsPage, action);
        this._callSubscriber(this._state);

        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         id: 5,
        //         message: this._state.profilePage.newPostText,
        //         likeCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageBody = action.body;
        //     this._callSubscriber(this._state);
        // } else if (action.type === SEND_MESSAGE) {
        //     let body =  this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.messages.push({ id: 6, message: body });
         
        }
    // }
    
}



export default store;
window.store = store;