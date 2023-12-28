import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    callback: (status: string) => void
}

export const ProfileStatusWithHooks = (props: PropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [inputStatus, setInputStatus] = useState<string>(props.status)

    useEffect(() => {
        if (inputStatus !== props.status) {
            setInputStatus(props.status)
        }
    }, []);

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.callback(inputStatus)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputStatus(e.currentTarget.value)
    }
    return (
        <div>
            {!editMode ?
                <div>
                        <span
                            onClick={activateEditMode}
                        >{inputStatus || "No status"}</span>
                </div>
                :
                <div>
                    <input
                        onChange={onChangeHandler}
                        onBlur={deactivateEditMode}
                        value={inputStatus}></input>
                </div>
            }
        </div>
    )
}