import React from 'react';
import {ProfileDataType, updateUserProfileChangesTC} from "../../../../../redux/profile-reducer";
import {Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {useFormData} from "../../lib/useFormData";
import {FormField} from "../FormField/FormField";
import {AppDispatch} from "../../../../../redux/redux-store";
import s from "./ProfileDataForm.module.css"

type PropsType = {
    profileData: ProfileDataType
    goToEditMode: (statusEditMode: boolean) => void
}

export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type Values = {
    aboutMe: string
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    submitError?: string
}


export const ProfileDataForm = (props: PropsType) => {
    const dispatch: AppDispatch = useDispatch();
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

                onSubmit={(values: Values, {setErrors}) => {
                    dispatch(updateUserProfileChangesTC(values))
                        .then(() => {
                            props.goToEditMode(false);
                        })
                        .catch(errorMessages => {
                            setErrors({submitError: errorMessages});
                        });
                }}
            >
                {({errors}) => (
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

                        {errors.submitError && <div className={s.errorContacts}>{errors.submitError}</div>}
                        <button disabled={!!errors.submitError} type="submit">Save</button>
                    </Form>
                )}
            </Formik>

        </div>
    );
};
