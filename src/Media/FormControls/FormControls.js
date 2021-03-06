import React from "react";
import styles from './FormControls.module.css'
import {Field} from "redux-form";




const FormControl = (props) => {


}







export const Textarea = ({input, meta, ...props}) =>{

    const hasError = meta.touched && meta.error;

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
            <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) =>{

    const hasError = meta.touched && meta.error;

    return(
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const CreateField =(placeholder,name, validate, component, props = {}, text='') => (
    <div>
    <Field placeholder={placeholder} name={name} validate={validate} component={component} {...props}/> {text}
    </div>
        )