import {addPostState, newTextPost} from "./profileReduser";
import {addMessage, newMessageText} from "./dialogsReduser";
import {follow, setUsers, unFollow} from "./usersReduser";
import {ActionType} from "./store";

type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    message: string
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    massages: Array<MessagesType>
    newTextMasseg: string
}

type PostsType = {
    id: number
    massage: string
    likes: number
}

type PostPageType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionType) => void
}
type PostType = {
    posts: Array<PostsType>
    newPostText: string
}

export type StateType = {
    postPage: PostType
    dialogsPage: DialogsPageType

}
type StoreType = {
    state: StateType
    subscriber: (observer: () => void) => void
    render?: () => void
    dispatch: (action: ActionType) => void
}


// export const store: StoreType = {
//     state: {
//         postPage: {
//             posts: [
//                 {id: 1, massage: "sacasc", likes: 4},
//                 {id: 2, massage: "sacasc", likes: 4},
//                 {id: 3, massage: "sacasc", likes: 4},
//                 {id: 4, massage: "sacasc", likes: 4},
//             ],
//             newPostText: 'a'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Amdrey'},
//                 {id: 2, name: 'Any'}
//             ],
//             massages: [
//                 {id: 1, message: 'yoooo'},
//                 {id: 1, message: 'ysss'},
//             ],
//             newTextMasseg:'f'
//         }
//
//     },
//     render() {
//     },
//
//     subscriber(observer: () => void) {
//         this.render = observer
//     },
//
//     dispatch(action) {
//         if (action.type === 'ADD_POST') {
//             let newPost: PostsType = {
//                 id: 4,
//                 massage: this.state.postPage.newPostText,
//                 likes: 4
//             }
//             this.state.postPage.posts.push(newPost)
//             this.render()
//         } else if (action.type === 'NEW_TEXT') {
//             this.state.postPage.newPostText = action.newText
//             this.render()
//         }
//         else if (action.type === 'NEW_MESSAGE_TEXT') {
//             this.state.dialogsPage.newTextMasseg = action.newText
//             this.render()
//         }
//         else if (action.type === 'ADD_MESSAGE') {
//             let newMessage:MessagesType = {id:3,message: this.state.dialogsPage.newTextMasseg}
//             this.state.dialogsPage.massages.push(newMessage)
//             this.state.dialogsPage.newTextMasseg=''
//             this.render()
//         }
//     }
// }

// const ADD_POST = 'ADD_POST';
// const NEW_TEXT = 'NEW_TEXT';
//
//
// const NEW_MESSAGE_TEXT= 'NEW_MESSAGE_TEXT';
// const ADD_MESSAGE = "ADD_MESSAGE";

// export  const addPostState=()=>({type: ADD_POST} as const )
// export  const newTextPost=(newText:string)=>({type: NEW_TEXT,newText:newText} as const)
//
// export  const newMessageText=(newText:string)=>({type: NEW_MESSAGE_TEXT,newText:newText} as const)
// export  const addMessage=()=>({type: ADD_MESSAGE} as const )






