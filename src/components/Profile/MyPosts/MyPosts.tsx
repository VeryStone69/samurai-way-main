import React from "react";
import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {TasksStateType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength100, required} from "../../../utils/Validators/validators";
import {FormControl} from "../../common/FormsControls/FormsControls";



type FormNewPostType = {
    newPost: string
}

type MyPostsPropsType = {
    profile: TasksStateType
    addPost: (newPost: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const {profile, addPost} = props

    let postsElement = profile.posts.map(p => {
        return <Post message={p.message} feedback={p.likesCount} key={p.id}/>
    })

    const onSubmit = (formValues: FormNewPostType) => {
        addPost(formValues.newPost)
    }

    return (
        <div className={s.myPost}>
            <h3>My Posts</h3>
            <div className={s.myPostTextareaButton}>

                <AddPostFormRedux onSubmit={onSubmit}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddNewPostForm: React.FC<InjectedFormProps<FormNewPostType>> = (props) => {

    return (
        <form className={s.formTextarea} onSubmit={props.handleSubmit}>
            <Field placeholder={"Enter your post"}
                   name={"newPost"}
                   // component={Textarea}
                   component={FormControl}
                   type="textarea"
                   validate = {[required,maxLength100]}
                    className={s.fieldTextarea}
            />
            <button className={s.myPostButton}>Add post</button>
        </form>
    )
}
const AddPostFormRedux = reduxForm<FormNewPostType>({
    form: "myPostMessageForm"
})(AddNewPostForm)