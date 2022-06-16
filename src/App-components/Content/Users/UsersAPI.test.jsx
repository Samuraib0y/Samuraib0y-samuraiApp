// // import React from "react";
// // import uS from './UsersAPITest.module.css'
// // import axios from "axios";
// //
// //
// // const UsersAPITest = (props) => {
// //
// //
// //     let getUsers = () => {
// //         if(props.users.length === 0) {
// //             axios.get('https://social-network.samuraijs.com/api/1.0//users').then( response => {
// //                 props.setUsers(response.data.items)
// //             })
// //         }
// //     }
// //
// //     return (
// //         <div>
// //             <button onClick={getUsers}> Get UsersAPITest</button>
// //             {
// //                 props.users.map(u => (<div key={u.id}>
// //                     <span>
// //                         <div className={uS.photo}>
// //                             <img src={ u.photos.small != null ? u.photos.small : "https://c.tenor.com/Xra1I75R_sUAAAAd/pain.gif"} alt=""/>
// //                         </div>
// //                         <div>
// //                             {u.followed ? <button onClick={() => {
// //                                     props.unfollow(u.id)
// //                                 }}>Unfollow</button> :
// //                                 <button onClick={() => {
// //                                     props.follow(u.id)
// //                                 }}>Follow</button>}
// //                         </div>
// //                     </span>
// //                     <span>
// //                       <span>
// //                           <div className={uS.nameText}>
// //                               {u.name}
// //                           </div>
// //                           <div>
// //                               {u.status}
// //                           </div>
// //                       </span>
// //                     </span>
// //                 </div>))
// //             }
// //         </div>
// //     )
// // }
// //
// //
// // export default UsersAPITest;
//
//
// import React from "react";
// import axios from "axios";
// import uS from './Users.module.css'
// import Users from "./Users";
//
//
//
//
//
//
//
//
//
// class UsersAPITest extends React.Component {
//
//     componentDidMount() {
//
//         axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${this.props.currentPage}&
//         count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items)
//             this.props.setTotalCount(response.data.totalCount)
//         })
//
//     }
//
//     onPageChanged = (pageN) => {
//         this.props.setCurrentPage(pageN);
//         axios.get(`https://social-network.samuraijs.com/api/1.0//users?page=${pageN}&
//         count=${this.props.pageSize}`).then(response => {
//             this.props.setUsers(response.data.items)
//         })
//     }
//
//
//     render() {
//
//
//
//         return <Users users={this.props.users} onPageChanged={this.onPageChanged}
//                       totalUsersCount={this.props.totalUsersCount}  pageSize={this.props.pageSize}
//                       currentPage={this.props.currentPage} follow={this.props.follow} unfollow={this.props.unfollow}/>
//     }
// }
//
//
// export default UsersAPITest;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
