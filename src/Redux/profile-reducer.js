import {ProfileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD-POST'
const UPDATE_POST_AREA = 'UPDATE_POST_AREA'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS'
const DELETE_POST = 'DELETE_POST'

let initialState = {
    posts: [
        {
            id: 1,
            name: 'Andrey Popkamp3',
            likescount: 12,
            text: 'Bla lba lba!',
            avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
        },
        {
            id: 2,
            name: 'Masha Popka',
            likescount: 2,
            text: 'Da poebat!',
            avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
        },
        {
            id: 3,
            name: 'Rubak Lobak',
            likescount: 32,
            text: 'Tu suka , ya suka',
            avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
        }

    ],
    postTextArea: "Hello!",
    profile: null,
    status: '',
    userId: 4958
}


const profileReducer = (state = initialState, action) => {

    // if (action.type === ADD_POST){
    //     let newPost = {
    //         id: 5,
    //         name: "Mr Test",
    //         likescount: 22,
    //         text: postTextArea,
    //         avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
    //     }
    //     state.posts.push(newPost)
    //     state.postTextArea = '';
    // }
    // else if (action.type === UPDATE_POST_AREA) {
    //     state.postTextArea = action.newText;
    // }


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                name: "Mr Test",
                likescount: 22,
                text: action.newPostBody,
                avatar: 'https://www.icegif.com/wp-content/uploads/sasuke-icegif-1.gif'
            }
            let stateShadow = {...state};
            stateShadow.posts = [...state.posts]
            stateShadow.posts.push(newPost);
            // stateShadow.postTextArea = '';
            return stateShadow;
        }
        // case UPDATE_POST_AREA: {
        //     let stateShadow = {...state}
        //     stateShadow.postTextArea = action.newText
        //     return stateShadow;
        // }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_PROFILE_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case DELETE_POST: {
            console.log('asdasdasdasdsad')
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        default:

            return state;
    }
}


export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const updatePostArea = (newText) => ({type: UPDATE_POST_AREA, newText})
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setProfileStatus = (status) => ({type: SET_PROFILE_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) =>
    async (dispatch) => {
        let response = await usersAPI.getProfile(userId)
        dispatch(setUsersProfile(response.data))
    }

export const getProfileStatus = (userId) =>
    async (dispatch) => {
        let responce = await ProfileAPI.getStatus(userId)
        dispatch(setProfileStatus(responce.data))
    }

export const updateProfileStatus = (status) =>
    async (dispatch) => {

        let responce = await ProfileAPI.updateStatus(status)
        if (responce.data.resultCode === 0) {
            dispatch(setProfileStatus(status))
        }
    }

export default profileReducer;