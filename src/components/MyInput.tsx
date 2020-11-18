import React, { FC, useState } from 'react'

type PropsType = {
    label: string
    placeholder: string
    name: string
    formik: any
}

const MyInput: FC<PropsType> = ({
    label, 
    placeholder, 
    name,
    formik
}) => {

    const [showError, setShowError] = useState(false)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.getFieldProps(name).onChange(e)
        setShowError(false)
    }

    const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.getFieldProps(name).onBlur(e)
        setShowError(true)
    }

    return (
        <div className="field-block">
            <label className="field-block__label">{label}</label>
            <div className="field-block__input-wrapper">
                <input 
                    type="text" 
                    className="field-block__input" 
                    autoComplete="off"
                    {...formik.getFieldProps(name)}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {!formik.values[name] && <p className="field-block__placeholder">{placeholder}</p>}
            </div>
                {showError && formik.errors[name] && formik.touched[name] && 
                    <p className="field-block__error">{formik.errors[name]}</p>
                }        
        </div>
    )
}

export default MyInput
