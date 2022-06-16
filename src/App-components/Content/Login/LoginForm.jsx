import React from 'react';
import {Field, reduxForm} from "redux-form";
import l from './loginForm.module.css'
import {CreateField, Input} from "../../../Media/FormControls/FormControls";
import {required} from "../../../Utils/validation/validator";

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form className={l.loginForm} onSubmit={handleSubmit}>
            <div>
                {CreateField ("Email", "email",[required], Input)}
                {CreateField ("Password", "password",[required], Input, {type: "password"})}
                {/*{CreateField (null, "rememberMe",null, checkbox, {type: "checkbox"}, 'rememberMe')}*/}
            {/*    <Field placeholder={"Email"} name={'email'} validate={[required]} component={Input}/></div>*/}
            {/*<div><Field placeholder={"password"} name={'password'} validate={[required]} component={Input}/></div>*/}
            <div><Field component={'input'} name={'rememberMe'} type="checkbox"/>Remember me</div>
            <div><button>Login</button></div>
            {error &&
            <div className={l.formSummeryError}>
                {error}
            </div>
            }
            </div>
        </form>
    );
};

export const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

