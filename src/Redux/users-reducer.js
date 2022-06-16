import {usersAPI} from "../API/api";
import {updateObjectInArray} from "../Utils/object-helper";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_PROGRESS_FOLLOWING = 'TOGGLE_PROGRESS_FOLLOWING'
const SET_FRIENDS = 'SET_FRIENDS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
    friends: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {...u, followed: true}
                        //Мы пробигаемся по массиву юзеров , если находим id юзера, что пришел из action
                        //берем его , копируем и меняем значение followed на true.
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.count
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetch
            }
        }
        case TOGGLE_PROGRESS_FOLLOWING:
            return {
                ...state,
                followingProgress: action.isFollowing ?
                    [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }
        case SET_FRIENDS:
            return {
                ...state,
                friends: state.users.filter(users => (users.followed = true))
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const toggleIsFetching = (isFetch) => ({type: TOGGLE_IS_FETCHING, isFetch})
export const toggleProgressIsFollowing = (isFollowing, userId) => ({
    type: TOGGLE_PROGRESS_FOLLOWING,
    isFollowing,
    userId
})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})


export const getUsersThunkCreator = (currentPage, pageSize) =>
    async (dispatch) => {
        dispatch(toggleIsFetching(false))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(true))
        dispatch(setUsers(response.items))
        dispatch(setTotalCount(response.totalCount))

    }

export const getFriends = (friends) =>
    async (dispatch) => {
        let response = await usersAPI.getUsers()
        dispatch(setUsers(response.items))
        dispatch(setFriends(friends))
    }

const followUnfollowFlow = async (dispatch, userId, apiMet, actionCreator) => {
    dispatch(toggleProgressIsFollowing(true, userId))
    let response = await apiMet(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleProgressIsFollowing(false, userId))
}


export const unfollowThunk = (userId) =>
    async (dispatch) => {
        let apiMet = usersAPI.unfollowUser.bind(usersAPI)
        let actionCreator = unfollow
        followUnfollowFlow(dispatch, userId, apiMet, actionCreator)

    }

export const followThunk = (userId) =>
    async (dispatch) => {
        let apiMet = usersAPI.followUser.bind(usersAPI)
        let actionCreator = follow
        followUnfollowFlow(dispatch, userId, apiMet, actionCreator)
    }

// export const setFriendsAC = (dispatch) => {
//     usersAPI.getUsers(3, 3).then(response => {
//         dispatch(setUsers(response.items))
//         dispatch(setBestFriends(response.items))
//     })
// }
//
//


export default usersReducer;