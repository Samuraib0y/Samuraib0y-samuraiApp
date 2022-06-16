import React from "react";
import {Hook} from "../../hook";




const Friends = (props) => {




    return(
    <div>
        {props.friends.map(f => <h3>
            {f.name}
        </h3>)}


            <Hook/>
            <h1>Friends</h1>
        </div>
    )

}


export default Friends;