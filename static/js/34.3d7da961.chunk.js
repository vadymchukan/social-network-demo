"use strict";(self.webpackChunkreact_pr=self.webpackChunkreact_pr||[]).push([[34],{2034:function(t,s,e){e.r(s),e.d(s,{default:function(){return E}});var n=e(5671),r=e(3144),o=e(136),i=e(5716),u=e(1413),a=e(2791),p=e(6070),c="MyPosts_postsBlock__lB-pf",l="MyPosts_posts__GSiZ2",d="Post_item__Yu4oG",f="Post_postimage__zJoQ4",h=e(184),x=function(t){return(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{className:f,src:"https://panwybierak.pl/blog/wp-content/uploads/2020/05/avatarmaker4.png",alt:""}),t.message,(0,h.jsxs)("div",{children:[(0,h.jsx)("span",{children:"like "}),t.likeCount]})]})},j=e(6139),m=e(704),v=e(4998),g=e(9086),P=(0,v.h)(10),_=a.memo((function(t){var s=t.posts.map((function(t){return(0,h.jsx)(x,{message:t.message,likeCount:t.likeCount})}));return(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("h3",{children:"My post"}),(0,h.jsx)(k,{onSubmit:function(s){t.addPost(s.newPostText)}}),(0,h.jsx)("div",{className:l,children:s})]})})),k=(0,m.Z)({form:"prfileMessageForm"})((function(t){return(0,h.jsxs)("form",{action:"",onSubmit:t.handleSubmit,children:[(0,h.jsx)(j.Z,{placeholder:"Enter your message",name:"newPostText",component:g.Kx,validate:[v.C,P]}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:"Add post"})})]})})),S=_,Z=e(8687),b=(0,Z.$j)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(s){t((0,p.Wl)(s))}}}))(S),C=e(6855),w="ProfileInfo_descriptioneBlock__cBY8s",y=(a.Component,e(885)),N=function(t){var s=(0,a.useState)(!1),e=(0,y.Z)(s,2),n=e[0],r=e[1],o=(0,a.useState)(t.status),i=(0,y.Z)(o,2),u=i[0],p=i[1];(0,a.useEffect)((function(){p(t.status)}),[t.status]);return(0,h.jsxs)("div",{children:[!n&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:t.status||"None status"})}),n&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),t.updateStatus(u)},value:u})})]})},M=function(t){return t.profile?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{}),(0,h.jsxs)("div",{className:w,children:[(0,h.jsx)("img",{src:t.profile.photos.large}),t.profile.aboutMe,t.profile.contacts.facebook,(0,h.jsxs)("div",{children:[" ",(0,h.jsx)(N,{status:t.status,updateStatus:t.updateStatus})," "]})]})]}):(0,h.jsx)(C.Z,{})},T=function(t){return(0,h.jsxs)("div",{children:[(0,h.jsx)(M,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),(0,h.jsx)(b,{})]})},B=e(6871),U=e(7781);var D=function(t){(0,o.Z)(e,t);var s=(0,i.Z)(e);function e(){return(0,n.Z)(this,e),s.apply(this,arguments)}return(0,r.Z)(e,[{key:"componentDidMount",value:function(){var t=this.props.router.params.userId;t||(t=2),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return(0,h.jsx)(T,(0,u.Z)((0,u.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),e}(a.Component),E=(0,U.qC)((0,Z.$j)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status}}),{getUserProfile:p.et,getStatus:p.lR,updateStatus:p.Nf}),(function(t){return function(s){var e=(0,B.TH)(),n=(0,B.s0)(),r=(0,B.UO)();return(0,h.jsx)(t,(0,u.Z)((0,u.Z)({},s),{},{router:{location:e,navigate:n,params:r}}))}}))(D)}}]);
//# sourceMappingURL=34.3d7da961.chunk.js.map