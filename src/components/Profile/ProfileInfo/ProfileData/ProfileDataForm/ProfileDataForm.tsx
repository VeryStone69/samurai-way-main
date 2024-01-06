import React from 'react';
import {ProfileDataType, updateUserProfileChangesTC} from "../../../../../redux/profile-reducer";
import {Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {useFormData} from "../../lib/useFormData";
import {FormField} from "../FormField/FormField";

type PropsType = {
    profileData: ProfileDataType
    goToEditMode: (statusEditMode: boolean) => void
}

type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type Values = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
}

export const ProfileDataForm = (props: PropsType) => {
    const dispatch = useDispatch();
    const {profileData} = props
    const {contacts, ...restProfileData} = profileData
    const {formFields} = useFormData()
    return (
        <div>
            <Formik
                initialValues={{
                    ...restProfileData,
                    contacts: {
                        ...Object.keys(contacts).reduce((acc, key) => {
                            acc[key as keyof ContactsType] = contacts[key as keyof ContactsType] || "";
                            return acc;
                        }, {} as ContactsType)
                    }
                }}

                onSubmit={(values: Values) => {
                    dispatch(updateUserProfileChangesTC(values));
                    props.goToEditMode(false)
                }}
            >
                <Form>
                    {formFields.map(field => (
                        <FormField
                            key={field.label}
                            title={field.title}
                            label={field.label}
                            type={field.type}
                            placeholderName={field.placeholderName}
                        />
                    ))}
                    <button type="submit">Save</button>
                </Form>
            </Formik>
        </div>
    );
};
