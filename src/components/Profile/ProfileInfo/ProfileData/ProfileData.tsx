import React from 'react';
import s from "../ProfileInfo.module.css";
import facebookLogo from "../../../../assets/images/icons-facebook-48.png";
import githubLogo from "../../../../assets/images/icons-github-48.png";
import twitterLogo from "../../../../assets/images/icons-twitterx-48.png";
import websiteLogo from "../../../../assets/images/icons8-search-in-browser-48.png";
import {ProfileDataType} from "../../../../redux/profile-reducer";

type PropsType = {
    profileData: ProfileDataType
    isOwner:boolean
    goToEditMode: (statusEditMode:boolean)=>void
}

export const ProfileData = (props: PropsType) => {

    return (
        <>

            <div className={s.profileFullName}>{props.profileData.fullName}</div>
            {/*<ProfileStatusClass status={profileStatus} callback = {statusHandler}/>*/}

            <div>{props.profileData.aboutMe}</div>
            {props.profileData.lookingForAJob ? <div>У меня есть работа</div>
                : <div className={s.findJob}>В активном поиске работы</div>}
            <div className={s.profileSocialNetworks}>
                {props.profileData.contacts.facebook ?
                    <a href={props.profileData.contacts.facebook}><img alt={"facebook logo"} src={facebookLogo}/></a> : ""}
                {props.profileData.contacts.github ?
                    <a href={props.profileData.contacts.github}><img alt={"github logo"}
                                                               src={githubLogo}/></a> : ""}
                {props.profileData.contacts.twitter ?
                    <a href={props.profileData.contacts.twitter}><img alt={"twitter logo"}
                                                                src={twitterLogo}/></a> : ""}
                {props.profileData.contacts.website ?
                    <a href={props.profileData.contacts.website}><img alt={"logo for web page"}
                                                                src={websiteLogo}/></a> : ""}
            </div>
            {props.isOwner?<button onClick={()=>props.goToEditMode(true)}>Edit information</button>:""}
        </>
    );
};
