import React, { Component } from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLenghtCreator, required } from "../../../units/validators/validators";
import { TextArea } from "../../common/FormsControls/FormsControls";


const maxLenght10 = maxLenghtCreator(10);

const MyPosts = React.memo(props => {
  let postsElement = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);
  let newPostElement = React.createRef();
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }
  return (
  <div className={s.postsBlock}>
    <h3>My post</h3>
    <PostFormRedux onSubmit={ onAddPost } />
    <div className={s.posts}>
      {postsElement}
    </div>
  </div>)
});

// class MyPosts extends PureComponent {
// // shouldComponentUpdate(nextProps, nextState){
// //   return nextProps != this.props || nextState != this.props; 
// // }

//   render(){
//     let postsElement = this.props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} />);
//     let newPostElement = React.createRef();
//     let onAddPost = (values) => {
//       this.props.addPost(values.newPostText);
//     }
//     return <div className={s.postsBlock}>
//       <h3>My post</h3>
//       <PostFormRedux onSubmit={ onAddPost } />
//       <div className={s.posts}>
//         {postsElement}
//       </div>
//     </div>
//   }

// }

const addNewPostForm = (props) => {
  return (
  <form action="" onSubmit={props.handleSubmit}>
      <Field placeholder="Enter your message" name="newPostText" component={TextArea} 
      validate = {[required, maxLenght10]} />
      <div>
      <button>Add post</button>
      </div>
  </form>
  );
}

const PostFormRedux = reduxForm({form: 'prfileMessageForm'})(addNewPostForm);

export default MyPosts;