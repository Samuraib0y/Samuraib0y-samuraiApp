import React from "react";
import p from './Post.module.css'


const Post = (props) =>{



    return(
        <div>
            <div className={p.avatarUser}>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
            </div>
            <div className="textUser">
                {props.text}
            </div>
            <div>
                <button onClick={() => {props.deletePost(props.id)}}>Delete</button>
            </div>
        </div>
    )
}



export default Post;