import React from "react";
import h from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return(
        <div className={h.Header}>
            <div className={h.logo}>
                <img src="https://www.pngfind.com/pngs/m/47-470771_eternal-sharingan-png-mangekyou-sharingan-itachi-png-transparent.png" alt=""/>
            </div>
            <div className={h.userLogin}>
                { props.isAuth ?
                    <div>{props.login} - <button onClick={props.logout}> Logout </button></div> :
                <NavLink to={'/login'}>{props.login}</NavLink> }
            </div>
        </div>
    )
}



export default Header;