
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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

}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case SEND_MESSAGE: 
        let body = action.newMessageBody;
        return {
            ...state,
            messages: [...state.messages,{ id: 6, message: body }]
        }     
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;