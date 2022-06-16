import React from "react";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";
import {deletePost} from "../../../../Redux/profile-reducer";



let mapStateToProps = (state) =>{
    return{
        posts: state.profileReducer.posts
    }
}




const MyPostsContainer = connect(mapStateToProps, deletePost )(MyPosts)


export default MyPostsContainer;