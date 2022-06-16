import React from "react";
import uS from "./Users.module.css";
import {NavLink} from "react-router-dom";

const User = (props) => {
    let user = props.user
    return(
        (<div key={user.id}>
                    <span>
                        <div className={uS.photo}>
                            <NavLink to={'/profile/' + user.id}>
                            <img
                                src={user.photos.small != null ? user.photos.small : "https://c.tenor.com/Xra1I75R_sUAAAAd/pain.gif"}
                                alt=""/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {

                                    props.unfollowThunk(user.id)

                                    // props.toggleProgressIsFollowing(true, u.id)
                                    // usersAPI.unfollowUser(u.id).then(response => {
                                    //         if (response.data.resultCode === 0) {
                                    //             props.unfollow(u.id)
                                    //         }
                                    //     props.toggleProgressIsFollowing(false, u.id)
                                    //     props.unsetBestFriends(u)
                                    //     }
                                    // )

                                }}> Unfollow </button>
                                : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                    props.followThunk(user.id)

                                }}>Follow</button>}
                                    </div>
                                    </span>
            <span>
                                    <span>
                                    <div className={uS.nameText}>
                                {user.name}
                                    </div>
                                    <div>
                                {user.status}
                                    </div>
                                    </span>
                                    </span>
        </div>)
    )
}

export default User;