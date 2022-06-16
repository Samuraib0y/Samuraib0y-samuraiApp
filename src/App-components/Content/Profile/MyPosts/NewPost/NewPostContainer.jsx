import React from "react";
import NewPost from "./NewPost";
import {addPostActionCreator} from "../../../../../Redux/profile-reducer";
import {connect} from "react-redux";

//
// const NewPostContainer = (props) =>{
//
//
//     let sendPost = () =>{
//         props.dispatch(addPostActionCreator())
//     }
//
//     let postOnChange = (newText) => {
//         props.dispatch(updatePostArea(newText))
//     }
//
//
//     return(<NewPost updatePostArea={postOnChange}  sendPost={sendPost}
//                     postTextArea={props.postTextArea} />)
// }

let mapStateToProps = (state) =>{
    return{
        postTextArea: state.profileReducer.postTextArea
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        sendPost: (newPostBody) =>{
            dispatch(addPostActionCreator(newPostBody))
        }
    }
}



const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)



export default NewPostContainer;