import React from "react";
import {LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import  {login} from "../../../Redux/login-reducer";
import {Navigate} from "react-router-dom";



const Login = (props) => {

    const onSubmit = (formData) => {
            props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Navigate to={'/profile'} />
    }

    return(
        <div>
            <h1>Login</h1>
            < LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) =>({
    isAuth: state.loginReducer.isAuth
})

export default connect (mapStateToProps, {login})(Login);