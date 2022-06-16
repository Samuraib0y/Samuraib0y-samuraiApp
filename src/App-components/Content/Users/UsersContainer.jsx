import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunk, getUsersThunkCreator,
    toggleProgressIsFollowing,
     unfollowThunk
} from "../../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../../../Media/Preloader/Preloader";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../../Redux/users-selectors";


class UsersAPI extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);



        // this.props.toggleIsFetching(false)
        //
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(true)
        //     this.props.setUsers(response.items)
        //     this.props.setTotalCount(response.totalCount)
        // })

    }

    onPageChanged = (pageN) => {

        this.props.getUsersThunkCreator(pageN, this.props.pageSize)

        // this.props.toggleIsFetching(false)
        // this.props.setCurrentPage(pageN);
        // usersAPI.getUsers(pageN, this.props.pageSize).then(response => {
        //     this.props.toggleIsFetching(true)
        //     this.props.setUsers(response.items)
        // })
    }


    render() {


        return <>
            {this.props.isFetching ?  null : <Preloader/>}


            <Users users={this.props.users} onPageChanged={this.onPageChanged}
                   totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                   followingProgress={this.props.followingProgress}
                   currentPage={this.props.currentPage}
                   followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk}
            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalCount: (count) => {
//             dispatch(setTotalCountAC(count))


//         },
//         toggleIsFetching: (isFetch) => {
//             dispatch(toggleIsFetchingAC(isFetch))
//         }
//     }
// }


// const UsersContainer = connect(mapStateToProps, {follow,
//     toggleProgressIsFollowing,
//     unfollowThunk,
//     followThunk,
//     getUsersThunkCreator,
//     })(UsersAPI)


// export default UsersContainer;


export default compose(connect(mapStateToProps, {follow,
    toggleProgressIsFollowing,
    unfollowThunk,
    followThunk,
    getUsersThunkCreator,
}))(UsersAPI)