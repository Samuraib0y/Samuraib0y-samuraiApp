import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {getFriends} from "../../../Redux/users-reducer";










let mapStateToProps = (state) => {
    return{
        friends: state.usersReducer.friends,
    }
}



const FriendsContainer = connect(mapStateToProps, getFriends )( Friends )


export default FriendsContainer;