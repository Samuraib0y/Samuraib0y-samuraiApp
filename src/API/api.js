import axios from "axios";
import React from "react";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '4986e4f2-a289-4393-ac88-c345cc12280c'
    }

})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance.get(`/users?page=${currentPage}&
        count=${pageSize}`).then(response => response.data)
        )
    },
    unfollowUser(id) {
        return (
            instance.delete(`follow/${id}`)
        )
    },
    followUser(id) {
        return (
            instance.post(`follow/${id}`, {})
        )
    },
    getProfile(id) {
        console.warn('Obsolete method. Please use profileAPI  object')
        return ProfileAPI.getProfile(id)
    }
}

export const authAPI = {
    authMe(){
        return(
            instance.get(`auth/me`)
        )
    },
    login(email, password, rememberMe){
        return(
            instance.post(`auth/login` , {email, password, rememberMe})
        )
    },
    logout(){
        return(
            instance.delete(`auth/login`)
        )
    }
}



export const ProfileAPI = {
    getProfile(id) {
        return(
            instance.get(`profile/${id}`)
        )
    },
    getStatus(id){
        return(
            instance.get(`profile/status/${id}`)
        )
    },
    updateStatus(status){
        return(
            instance.put(`profile/status/`, {status: status})
        )
    }
}












// export const getUsers = (currentPage, pageSize) => {
//     return (
//         instance.get(`/users?page=${currentPage}&
//         count=${pageSize}`).then(response => response.data)
//     )
// }
//
// export const unfollowUser = (id) => {
//     return (
//         instance.delete(`follow/${id}`)
//     )
//
// }
//
// export const followUser = (id) => {
//     return (
//         instance.post(`follow/${id}`, {})
//     )
// }