"use strict";(self.webpackChunksamurai=self.webpackChunksamurai||[]).push([[123],{7123:function(e,s,t){t.r(s),t.d(s,{default:function(){return M}});var i=t(8683),r=t(5671),n=t(3144),o=t(136),a=t(5716),l=t(2791),c={},u=t(6139),d=t(704),p=t(3716),f=t(5153),h=t(184),x=(0,p.D)(10),j=(0,d.Z)({form:"profileAddPostForm"})((function(e){return(0,h.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,h.jsx)("div",{children:(0,h.jsx)(u.Z,{component:f.gx,name:"newPostBody",placeholder:"Write new post",validate:[p.C,x]})}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{children:" Post "})})]})})),m=function(e){return(0,h.jsx)("div",{className:"NewPost",children:(0,h.jsx)(j,{onSubmit:function(s){e.sendPost(s.newPostBody)}})})},v=t(6868),P=t(364),g=(0,P.$j)((function(e){return{postTextArea:e.profileReducer.postTextArea}}),(function(e){return{sendPost:function(s){e((0,v.Wl)(s))}}}))(m),N=t(2982),S="Post_avatarUser__T+xBP",k=function(e){return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:S,children:(0,h.jsx)("img",{src:e.avatar,alt:""})}),(0,h.jsx)("div",{}),(0,h.jsx)("div",{className:"textUser",children:e.text}),(0,h.jsx)("div",{children:(0,h.jsx)("button",{onClick:function(){e.deletePost(e.id)},children:"Delete"})})]})},Z=l.memo((function(e){var s=(0,N.Z)(e.posts).reverse().map((function(s){return(0,h.jsx)(k,{id:s.id,name:s.name,props:e,likescount:s.likescount,text:s.text,avatar:s.avatar})}));return(0,h.jsx)("div",{className:"MyPosts",children:s})})),w=(0,P.$j)((function(e){return{posts:e.profileReducer.posts}}),v.fR)(Z),b=t(5420),y=t(3504),I=t(885),C=function(e){var s=(0,l.useState)(!1),t=(0,I.Z)(s,2),i=t[0],r=t[1],n=(0,l.useState)(e.status),o=(0,I.Z)(n,2),a=o[0],c=o[1];(0,l.useEffect)((function(){c(e.status)}),[e.status]);return(0,h.jsxs)("div",{children:[!i&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"====="})}),i&&(0,h.jsx)("div",{children:(0,h.jsx)("input",{onChange:function(e){c(e.currentTarget.value)},onBlur:function(){r(!1),e.updateProfileStatus(a)},autoFocus:!0,value:a})})]})},R=function(e){return e.profile?(0,h.jsxs)("div",{className:c.profile,children:[(0,h.jsx)("div",{className:c.wallImg,children:(0,h.jsx)("img",{src:e.profile.photos.large||"https://www.meme-arsenal.com/memes/d464970c6ee0c1f2b838780e5f635a34.jpg"})}),(0,h.jsx)(C,{status:e.status,updateProfileStatus:e.updateProfileStatus}),(0,h.jsxs)("div",{className:c.profileInfo,children:[(0,h.jsx)("div",{className:"wall-img",children:(0,h.jsx)("img",{src:"",alt:""})}),(0,h.jsxs)("div",{className:c.profInf,children:[(0,h.jsx)("div",{className:c.avatar,children:(0,h.jsx)("img",{src:"",alt:""})}),(0,h.jsxs)("div",{className:c.info,children:[(0,h.jsx)("div",{className:c.name,children:(0,h.jsx)("h1",{children:e.profile.fullName||"Syka"})}),(0,h.jsxs)("div",{className:c.userInformation,children:[(0,h.jsxs)("span",{children:["\u0421\u0442\u0430\u0442\u0443\u0441: ",e.profile.aboutMe||"Pedik"]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{children:[(0,h.jsx)(y.OL,{to:e.profile.contacts.instagram||"poxyi",children:(0,h.jsx)("h3",{children:"inst"})}),(0,h.jsx)("a",{to:e.profile.contacts.twitter||"poxyi",children:(0,h.jsx)("h3",{children:"twitter"})}),(0,h.jsxs)(y.OL,{to:e.profile.contacts.vk||"poxyi",children:[(0,h.jsx)("h3",{children:"vk"}),"false &&"]})]})})]})]})]})]}),(0,h.jsx)(g,{}),(0,h.jsx)(w,{})]}):(0,h.jsx)(b.Z,{})},A=t(6871),D=t(7193),T=t(7781),B=function(e){(0,o.Z)(t,e);var s=(0,a.Z)(t);function t(){return(0,r.Z)(this,t),s.apply(this,arguments)}return(0,n.Z)(t,[{key:"componentDidMount",value:function(){var e=this.props.match?this.props.match.params.userId:this.props.initializedId;e||this.props.history.push("/login"),this.props.getProfile(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return(0,h.jsx)("div",{children:(0,h.jsx)(R,(0,i.Z)((0,i.Z)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateProfileStatus:this.props.updateProfileStatus}))})}}]),t}(l.Component),L=(0,D.D)(B),M=(0,T.qC)((0,P.$j)((function(e){return{profile:e.profileReducer.profile,status:e.profileReducer.status,isAuth:e.loginReducer.isAuth,initializedId:e.profileReducer.userId}}),{getProfile:v.Ai,getProfileStatus:v.TL,updateProfileStatus:v.vq}))((function(e){var s=(0,A.bS)("/profile/:userId/");return(0,h.jsx)(L,(0,i.Z)((0,i.Z)({},e),{},{match:s}))}))}}]);
//# sourceMappingURL=123.910d3117.chunk.js.map