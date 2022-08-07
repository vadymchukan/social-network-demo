import { userAPI } from "../api/api";
import { updateObjectInArray } from "../units/validators/object-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FECHING = 'TOGGLE_IS_FECHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state, 
               users: updateObjectInArray(state.users, action.userId, "id", {followed:true})
               
                // users: state.users.map(u=>{
                //     if (u.id === action.userId) {
                //         return {...u, followed:true}
                //     }
                //     return u;
                // })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users, action.userId, "id", {followed:false})
            }
        case SET_USERS: {
            //return { ...state, users:[...state.users, ...action.users] }
            return { ...state, users:action.users }
        }
        case SET_CURRENT_PAGE: {       
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT: {       
            return { ...state,  totalUsersCount: action.count }
        }
        case TOGGLE_IS_FECHING: {       
            return { ...state,  isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {       
            return { ...state,  
                followingInProgress: action.isFetching
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id!= action.userId) }
        }
        default:
            return state;
    }
}
// ACTION Creator
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = ( totalUsersCount) => ({ type: SET_TOTAL_COUNT,  count: totalUsersCount })
export const toggletIsFetching = (isFetching) => ({type: TOGGLE_IS_FECHING, isFetching})
export const toggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsers = (page,pageSize,pageNumber ) => async (dispach) => {
   dispach(toggletIsFetching(true));

    let data = await userAPI.requestUsers(page, pageSize)
        dispach(toggletIsFetching(false))
        dispach(setUsers(data.items));
        dispach(setTotalCount(data.totalCount));
        dispach(setCurrentPage(page))
  
}
 
const followUnfollowFlow = async (dispach, userId, apiMethod, actionCreator) =>{
    dispach(toggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId)
            if (response.data.resultCode == 0) {
                dispach(actionCreator(userId)); 
            }
            dispach(toggleFollowingInProgress(false, userId));
}

export const follow = (userId ) => async (dispach) => {

        followUnfollowFlow(dispach, userId, userAPI.follow.bind(userAPI), followSuccess);
 }

 export const unfollow = (userId ) => async (dispach) => {

    followUnfollowFlow(dispach, userId, userAPI.unfollow.bind(userAPI), unfollowSuccess);
    
 }

export default usersReducer;