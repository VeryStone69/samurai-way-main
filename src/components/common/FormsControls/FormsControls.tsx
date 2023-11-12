import React from "react";
import s from './FormsControls.module.css'
import {WrappedFieldProps} from "redux-form/lib/Field";

type FormControlProps = WrappedFieldProps & {
    type: 'textarea' | 'input'
}

export const FormControl: React.FC<FormControlProps> = ({ input, meta, type, ...props }) => {
    const hasError = meta.touched && meta.error;
    const Tag = type;

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ''}`}>
            <Tag {...input} {...props} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

// =================== Old version
// export const Textarea: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//
//             <div>
//                 <textarea {...input}{...props}/>
//             </div>
//             <div>{hasError && <span>{meta.error}</span>}</div>
//         </div>
//     )
// }
//
// export const Input: React.FC<WrappedFieldProps> = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error
//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}>
//
//             <div>
//                 <input {...input}{...props}/>
//             </div>
//             <div>{hasError && <span>{meta.error}</span>}</div>
//         </div>
//     )
// }



