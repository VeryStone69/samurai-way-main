import React, {ChangeEvent,useState} from 'react';
import s from './ProfileInfo.module.css'
import {
    ProfileDataType,
    saveProfilePhotoTC,
    TasksStateType,
    updateProfileStatusTC
} from "../../../redux/profile-reducer";
import {UsersLoader} from "../../common/UsersLoader";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../redux/redux-store";

import {profileStatusSelector} from "./selectors/profileInfo-selectors";
import {ProfileStatusWithHooks} from "./ProfileStatus/ProfileStatusWithHooks";
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataForm} from "./ProfileData/ProfileDataForm/ProfileDataForm";

type PropsType = {
    profile: TasksStateType
    isOwner:boolean
}
export const ProfileInfo= React.memo((props:PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const profileData = props.profile.profile
    const profileStatus = useAppSelector(profileStatusSelector)
    const dispatch=useDispatch()
    const statusHandler = (status:string)=>{
        dispatch(updateProfileStatusTC(status))
    }
    const photoSelectedHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        if (e.target.files) dispatch(saveProfilePhotoTC(e.target.files[0]))
    }
    const goToEditMode = (statusEditMode:boolean)=>{
        setEditMode(statusEditMode)
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
                        {props.isOwner && <input className={s.inputFileContainer} type={"file"} onChange={photoSelectedHandler}/>}
                        {editMode
                            ? <ProfileDataForm profileData={profileData} goToEditMode={goToEditMode}/>
                            :<ProfileData goToEditMode={goToEditMode} profileData={profileData} isOwner={props.isOwner}/>}
                        <ProfileStatusWithHooks status={profileStatus} callback = {statusHandler}/>
                    </div>
                </div>
            }

        </>

    );
});
