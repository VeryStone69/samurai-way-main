import React from 'react';
import s from './ProfileInfo.module.css'
import {TasksStateType, updateProfileStatusTC} from "../../../redux/profile-reduser";
import {UsersLoader} from "../../common/UsersLoader";
import facebookLogo from "../../../assets/images/icons-facebook-48.png";
import githubLogo from "../../../assets/images/icons-github-48.png"
import twitterLogo from "../../../assets/images/icons-twitterx-48.png"
import websiteLogo from "../../../assets/images/icons8-search-in-browser-48.png"
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/redux-store";
import {profileStatusSelector} from "./selectors/profileInfo-selectors";
import {ProfileStatusWithHooks} from "../ProfileStatus/ProfileStatusWithHooks";
import {ProfileStatusClass} from "../ProfileStatus/ProfileStatusClass";

type ProfileInfoPropsType = {
    profile: TasksStateType
}
export const ProfileInfo: React.FC<ProfileInfoPropsType> = ({...profile}) => {
    const profileData = profile.profile.profile
    const profileStatus = useAppSelector(profileStatusSelector)
    const dispatch=useDispatch()

    const statusHandler = (status:string)=>{
        dispatch(updateProfileStatusTC(status))
    }
    return (
        <>
            {!profileData ?
                <UsersLoader/> :
                <div>
                    <img className={s.profileInfo_img}
                         src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                         alt="content picture"/>
                    <div className={s.descriptionBlock}>
                        <img className={s.profileLargePhoto} alt={"user photo"} src={profileData.photos.large}/>
                        <div className={s.profileFullName}>{profileData.fullName}</div>
                        {/*<ProfileStatusClass status={profileStatus} callback = {statusHandler}/>*/}
                        <ProfileStatusWithHooks status={profileStatus} callback = {statusHandler}/>
                        {/*<div>{profileData.aboutMe}</div>*/}
                        {profileData.lookingForAJob ? <div className={s.findJob}>В активном поиске работы</div> :
                            <div>У меня есть работа</div>}
                        <div className={s.profileSocialNetworks}>
                            {profileData.contacts.facebook ?
                                <a href={profileData.contacts.facebook}><img alt={"facebook logo"} src={facebookLogo}/></a> : ""}
                            {profileData.contacts.github ?
                                <a href={profileData.contacts.github}><img alt={"github logo"}
                                                                           src={githubLogo}/></a> : ""}
                            {profileData.contacts.twitter ?
                                <a href={profileData.contacts.twitter}><img alt={"twitter logo"}
                                                                            src={twitterLogo}/></a> : ""}
                            {profileData.contacts.website ?
                                <a href={profileData.contacts.website}><img alt={"logo for web page"}
                                                                            src={websiteLogo}/></a> : ""}
                        </div>
                    </div>
                </div>
            }

        </>

    );
};
