import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {loginUserTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";

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
                    <Field placeholder={"Login"} name={"email"} component={"input"}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={"input"}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
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
    const onSubmit = (formData: FormDataType) => {
        dispatch(loginUserTC(formData))
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>

    );
};