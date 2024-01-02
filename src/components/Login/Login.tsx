import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {FormControl} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/Validators/validators";
import {AppRootStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import s from "./login.module.css"

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={FormControl}
                           type="input" validate = {[required]} value={"free@samuraijs.com"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={FormControl}
                           type="input" validate = {[required]} value={"free"}/>
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={"input"}/>
                    remember me
                </div>
                <div className={props.error&&s.formSummaryError}>
                    {props.error}
                </div>
                <div>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>

    );
};

const LoginReduxForm = reduxForm<FormDataType>({
    form: "login"
})(LoginForm)

export const Login = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector<AppRootStateType,boolean>(state => state.auth.isAuth)
    const onSubmit = (formData: FormDataType) => {
        dispatch(loginUserTC(formData))
    }
    if (isAuth) return <Navigate to={"/profile"}/>
    return (
        <div className={s.containerLoginInfo}>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   className={s.createAccountLink}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p><b>Email:</b> free@samuraijs.com</p>
            <p><b>Password:</b> free</p>
            {/*<h1>LOGIN</h1>*/}
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};