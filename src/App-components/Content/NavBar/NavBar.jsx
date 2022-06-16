import React from "react";
import n from './NavBar.module.css'
import {NavLink} from "react-router-dom";


const NavBar = () => {
    return(
        <div className={n.NavBar}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/friends">Friends</NavLink></div>
            <div><NavLink to="/dialogs">Messages</NavLink></div>
            <div><NavLink to="/users">Users</NavLink></div>
            <div><NavLink to="#">News</NavLink></div>
            <div><NavLink to="#">Music</NavLink></div>
            <div><NavLink to="#">Settings</NavLink></div>
        </div>
    )
}


export default NavBar;