import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return <div
    className={s.item}>
    <img className={s.postimage} src="https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker4.png" alt="" />
    {props.message}
    <div><span>like </span>{props.likeCount}</div>
    
  </div>
}

export default Post;