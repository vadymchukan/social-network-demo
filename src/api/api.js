import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "44504853-6cb8-4a62-a665-be980f047558" }
})

export const userAPI = {
    requestUsers(currentPage = 10, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId){
       return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        console.warn('przekerowanie')
        return profileAPI.getProfile(userId);
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`) 
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`) 
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status}) 
    },
}

export const authAPI = {
    my(){
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false){
        return instance.post(`auth/login`,{email, password, rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}
