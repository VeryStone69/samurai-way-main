import React from "react"
import s from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {FormControl} from "../common/FormsControls/FormsControls";
import {maxLength50, required} from "../../utils/Validators/validators";
import {DialogsPageType} from "../../redux/diallogs-reducer";


type DialogsPropsType = {
    dialogs: DialogsPageType
    addNewMessage: (message: string) => void
}
export type FormDialogType = {
    newMessageBody: string
}


export const Dialogs = React.memo((props:DialogsPropsType) => {
    const {dialogs, addNewMessage} = props

    let dialogsElement = dialogs.dialogs.map(d => {
        return <DialogItem name={d.name} id={d.id} key={d.id}/>
    })
    let messagesElement = dialogs.message.map(m => {
        return <Message messageText={m.message} key={m.id}/>
    })
    const onSubmit = (formValues: FormDialogType) => {
        addNewMessage(formValues.newMessageBody)
    }

    return (
        <>
            <div className={s.wrapperDialogs}>
                <div className={s.dialogs}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messagesElement}
                </div>

            </div>
            <div className={s.dialog_addMessage_container}>
                <AddMessageFormRedux onSubmit={onSubmit}/>
            </div>

        </>

    )
})

const AddMessageForm: React.FC<InjectedFormProps<FormDialogType>> = (props) => {
    return (
        <form className={s.dialogsForm} onSubmit={props.handleSubmit}>
            <div className={s.dialog_addMessage_textarea}>
                <Field
                    placeholder={"Enter your message"}
                    name={"newMessageBody"}
                    // component={Textarea}
                    component={FormControl}
                    type="textarea"
                    className={s.dialog_textarea}
                    validate = {[required,maxLength50]}
                />
            </div>
            <button className={s.dialog_addMessage_buttonAdd}>Add post</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDialogType>({
    form: "dialogAddMessageForm"
})(AddMessageForm)




