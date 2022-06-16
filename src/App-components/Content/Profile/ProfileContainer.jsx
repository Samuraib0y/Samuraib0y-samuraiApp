import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../../Redux/profile-reducer";
import {useMatch} from "react-router-dom";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : this.props.initializedId;
        if (!userId){
            this.props.history.push('/login')
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }


    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                         updateProfileStatus={this.props.updateProfileStatus}/>
            </div>
        )
    }
}

const ProfileURLMatch = (props) => {
    const match = useMatch('/profile/:userId/');
    return <ProfileRedirectComponent {...props} match={match} />;
}



let mapStateToProps = (state) => ({
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
    isAuth: state.loginReducer.isAuth,
    initializedId: state.profileReducer.userId
})

let ProfileRedirectComponent = withAuthRedirect(ProfileContainer)



export default compose( connect(mapStateToProps, { getProfile, getProfileStatus, updateProfileStatus }))(ProfileURLMatch)

// export default connect(mapStateToProps, { getProfile })(ProfileURLMatch)