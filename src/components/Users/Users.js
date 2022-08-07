import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users,  ...props}) => {
    // let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // let pages = [];
    // for (let i = 1; i <= pageCount; i++) {
    //     pages.push(i);
    
    return <div>
        {/* <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div> */}
        {/* Zamiast tego co u gory zrobiliszmy funkcie Paginatoor i poprostu wyzywamy ja tutaj */}
        <Paginator  currentPage = {currentPage} totalUsersCount= {totalUsersCount} pageSize= {pageSize} onPageChanged = {onPageChanged}   />
        {
            users.map(u =>  <User key={u.id} 
                user = {u} 
                followingInProgress = {props.followingInProgress} 
                unfollow ={props.unfollow} 
                follow={props.follow}/> 
            )

        }
    </div >
}
export default Users;