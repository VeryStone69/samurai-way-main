import {useAppSelector} from "../../../../redux/redux-store";
import {profileDataSelector} from "../../selectors/profile-selector";

export const useFormData = ()=>{
    const profileData=useAppSelector(profileDataSelector).profile
    const formFields = [
        { title: "Full name", label: "fullName", type: "text", placeholderName: profileData.fullName },
        { title: "What type of job am I looking for?", label: "lookingForAJobDescription", type: "textarea", placeholderName: profileData.lookingForAJobDescription },
        { title: "I have a job?", label: "lookingForAJob", type: "checkbox", placeholderName: profileData.lookingForAJob},
        { title: "About me", label: "aboutMe", type: "textarea", placeholderName: profileData.aboutMe },
    ];


    Object.entries(profileData.contacts).forEach(([key, value]) => {
        formFields.push({
            title: capitalizeFirstLetter(key),
            label: `contacts.${key}`,
            type: "text",
            placeholderName: value || ""
        });
    });

    function capitalizeFirstLetter(contact:string) {
        return contact.charAt(0).toUpperCase() + contact.slice(1);
    }
    return{formFields}
}