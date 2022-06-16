import React from "react";
import Post from "./Post/Post";


const MyPosts = React.memo(props => {



    let postElement =
        [...props.posts].reverse().map(p => (<Post id={p.id} name={p.name} props={props} likescount={p.likescount} text={p.text}
avatar={p.avatar}/>))


    return (
        <div className='MyPosts'>
            { postElement }
        </div>
    )
})


export default MyPosts;