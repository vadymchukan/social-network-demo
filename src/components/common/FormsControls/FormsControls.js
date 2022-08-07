import React from "react";
import styles from "../FormsControls/FormsControls.module.css"


export const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: "")}>
            <div>
                {props.children}
            </div>
           {hasError && <span>{meta.error}</span>} 
        </div>
    )
}


export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <textarea {...input} {...restProps}/></FormControl>
}
export const Input = (props) => {
    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input}{...restProps}/></FormControl>
}

// export const createField = () =>{
//     return <Field 
//     type="text" 
//     placeholder="email" 
//     name="email" 
//     component={Input}
//     validate = {[required]} />
// }