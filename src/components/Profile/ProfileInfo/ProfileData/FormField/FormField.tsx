import {Field} from "formik";
import React from "react";



type PropsType = {
    title: string
    label: string
    placeholderName: string | boolean | null
    type: string
}


export const FormField = (props: PropsType) => {
    const placeholderValue = typeof props.placeholderName === 'boolean'
        ? props.placeholderName.toString()
        : props.placeholderName || "";
    return (
        <div>
            <label htmlFor={props.label}>{props.title}: </label>
            {props.type === "textarea"
                ? (<Field id={props.label} name={props.label} as="textarea" placeholder={placeholderValue}/>)
                : (<Field id={props.label} name={props.label} type={props.type}
                               placeholder={placeholderValue}/>)

            }
        </div>)
}