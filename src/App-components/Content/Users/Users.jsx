import uS from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return (
        <div>
            <Paginator currentPage ={props.currentPage} totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} onPageChanged={props.onPageChanged}  />
            {
                props.users.map(u => <User user={u} key={u.id} followingProgress={props.followingProgress}
                                           followThunk={props.followThunk}  unfollowThunk={props.unfollowThunk}
                                            followed={props.followed} />
                )
            }
        </div>
    )
}

export default Users;