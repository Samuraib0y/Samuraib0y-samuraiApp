import React, {Component} from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        isAuth: state.loginReducer.isAuth
    }
}


export const withAuthRedirect =  (Component) => {

    class AuthRedirectComponent extends React.Component{
        render() {
            if (this.props.isAuth === false) return <Navigate to='/login' />
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(AuthRedirectComponent)

    return ConnectedAuthRedirectComponent;

}