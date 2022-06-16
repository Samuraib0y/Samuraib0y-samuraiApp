const ADD_MESSAGE = 'ADD_MESSAGE'


let initialState = {
    dialogUsers: [
        {name: 'Sasha', id: 12}, {name: 'Igor', id: 13},
        {name: 'Roma', id: 24}, {name: 'Natasha', id: 125}
    ],
    messageText: [
        {id: 12, text: 'Привет, как дела че делаешь?'},
        {id: 13, text: 'Вуай бля, подкинули'},
        {id: 24, text: 'Я дракон! Как так? Она голая, контакт'},
        {id: 125, text: 'Хочу с тобой заняться сексом диким'}
    ]
}


//
// const dialogReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_MESSAGE: {
//             let newMessageMember = {
//                 name: "You",
//                 id: 231,
//             }
//             let stateShadow = {...state};
//             stateShadow.dialogUsers = [...state.dialogUsers]
//             stateShadow.messageText = [...state.messageText]
//             stateShadow.dialogUsers.push(newMessageMember);
//             let newMessageBody = {
//                 id: 231,
//                 text: stateShadow.messageBody
//             }
//             stateShadow.messageText.push(newMessageBody)
//             stateShadow.messageBody = '';
//             return stateShadow
//         }
//         case UPDATE_MESSAGE_BODY:{
//             let stateShadow = {...state}
//             stateShadow.messageBody = action.newText
//             return stateShadow
//         }
//         default:
//             return state
//     }
// }


const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessageMember = {
                name: "You",
                id: 231,
            }
            let newMessageBody = {
                id: 231,
                text: action.newMessageBody
            };
            return {
                ...state,
                dialogUsers: [...state.dialogUsers, newMessageMember],
                messageText: [...state.messageText, newMessageBody]
            };
        }
        default:
            return state
    }
}


export const addMessageAC = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})

export default dialogReducer;