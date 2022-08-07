import cn from "classnames";
import React, { useState } from "react";

import styles from './Paginator.module.css'


let Paginator = ({totalUsersCount,pageSize, currentPage, onPageChanged,portionSize=10}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize;
    let rightPortionPageNumber = portionNumber * portionSize;


    return  <div className={styles.paginator}>
            { portionNumber > 1 && 
            <button onClick={()=>{ setPortionNumber(portionNumber-1) }}>Prev</button>}

            { pages
            .filter(p=> p>=leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p)=>{
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                key={p}
                onClick={(e)=>{onPageChanged(p)}}>{p}</span>
            })}
            {portionCount>portionNumber &&
            <button onClick={()=>{setPortionNumber(portionNumber+1)}}>Next</button>}
        </div>
}
export default Paginator;
