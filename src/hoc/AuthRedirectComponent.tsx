import React, {ComponentType, FunctionComponent} from "react";
import {Navigate} from "react-router-dom";
// import usersClassComponent from "../components/Users/UsersClassComponent";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {Profile} from "../components/Profile/Profile";
//
// type AuthRedirectComponentType = {
//     component: any
// }
//
// export const AuthRedirectComponent:any = ({...props}) => {
//     const isAuth = useSelector<AppRootStateType,boolean>(state => state.auth.isAuth)
//     class RedirectComponent extends React.Component<any, any> {
//         render() {
//             if (isAuth) return <Navigate to={"/login"}/>
//              else return props.component
//
//         }
//     }
//
//     return RedirectComponent
// }

// import {Component} from "react";


// export function AuthRedirectComponent<T>(Component: ComponentType<T>) {
//     const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
//     const RedirectComponent = () => {
//         if (isAuth) {
//             return <Navigate to={"/login"}/>
//         } else return <Profile/>
//     }
//     return RedirectComponent
// }