import React from "react";
import p from './Profile.module.css'
import NewPostContainer from "./MyPosts/NewPost/NewPostContainer";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../../Media/Preloader/Preloader";
import { NavLink} from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const Profile = (props) => {
    if (!props.profile){
        return <Preloader/>
    }



    return (

        <div className={p.profile}>
            <div className={p.wallImg}>
                <img src={props.profile.photos.large ||
                "https://www.meme-arsenal.com/memes/d464970c6ee0c1f2b838780e5f635a34.jpg"} />
            </div>
            <ProfileStatusWithHooks status={props.status} updateProfileStatus={props.updateProfileStatus}/>
            <div className={p.profileInfo}>
                <div className="wall-img">
                    <img src="" alt=""/>
                </div>
                <div className={p.profInf}>
                    <div className={p.avatar}>
                        <img src="" alt=""/>
                    </div>
                    <div className={p.info}>
                        <div className={p.name}>
                            <h1>
                                {props.profile.fullName || 'Syka'}
                            </h1>
                        </div>
                        <div className={p.userInformation}>
                           <span>
                               Статус: {props.profile.aboutMe || 'Pedik'}
                           </span>
                            <div>
                                <div>
                                    <NavLink to={props.profile.contacts.instagram || 'poxyi'}>
                                        <h3>
                                            inst
                                        </h3>
                                    </NavLink>
                                    <a to={props.profile.contacts.twitter || 'poxyi'}>
                                        <h3>
                                            twitter
                                        </h3>
                                    </a>
                                    <NavLink to={props.profile.contacts.vk || 'poxyi'}>
                                        <h3>
                                            vk
                                        </h3>false &&
                                        {/*<div>*/}
                                        {/*    <span onDoubleClick={ this.activateStatus } >{this.props.status || '====='}</span>*/}
                                        {/*</div>*/}
                                    </NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <NewPostContainer/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;


