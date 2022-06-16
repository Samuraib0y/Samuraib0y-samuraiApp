import React from "react";
import { NavLink} from "react-router-dom";
import d2 from './DialogItems.module.css'

const DialogItems = (props) => {

    return(
        <div className={d2.dialogUsers}>
            <NavLink to={'/dialog' + props.id}>
                { props.name }
            </NavLink>
        </div>
    )
}



export default DialogItems;