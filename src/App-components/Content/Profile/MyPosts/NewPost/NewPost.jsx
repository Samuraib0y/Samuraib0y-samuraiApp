import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../../Utils/validation/validator";
import {Textarea} from "../../../../../Media/FormControls/FormControls";


let maxLength = maxLengthCreator(10);
const NewPost = (props) =>{
    // let newPostElement = React.createRef();
    //
    //
    //
    //
    // let sendPost = () =>{
    //     props.sendPost()
    // }
    //
    //
    // let postOnChange = () => {
    //     let newText = newPostElement.current.value
    //     props.postOnChange(newText)
    // }

    let addP = (values) => {
        props.sendPost(values.newPostBody)
    }

    return(
        <div className='NewPost'>
            <AddPostFormRedux onSubmit={addP}/>
            {/*<textarea onChange={ postOnChange }  ref={newPostElement}*/}
            {/*          value={props.postTextArea} />*/}
            {/*<button onClick={ sendPost }> Send </button>*/}
        </div>
    )
}

const addNewPost = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostBody'
                placeholder='Write new post' validate={ [required, maxLength]}/>
            </div>
            <div>
                <button> Post </button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form:'profileAddPostForm'})(addNewPost)


export default NewPost;