import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import { logout} from "../../Redux/login-reducer";


class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getAuth(this.props.email, this.props.id, this.props.login)
    // }


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.loginReducer.isAuth,
    email: state.loginReducer.email,
    id: state.loginReducer.id,
    login: state.loginReducer.login
})


export default connect(mapStateToProps, { logout})(HeaderContainer);