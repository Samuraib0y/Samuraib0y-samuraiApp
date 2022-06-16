import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks = (props) => {
    // let  stateTestHook = useState(false)
    // let editMode = stateTestHook[0];
    // let setEditMode = stateTestHook[1] обьяснение хука

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect( () =>{
        setStatus(props.status)
    },[props.status] )

    const activateStatus = () => {
        setEditMode(true)
    }

    const deactivateStatus = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={ activateStatus }>{props.status || '====='}</span>
                </div>
            }
            {editMode &&
            <div>
                <input onChange={ onStatusChange} onBlur={ deactivateStatus} autoFocus={true} value={status}
                />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;