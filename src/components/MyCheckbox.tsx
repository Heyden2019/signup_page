import classNames from 'classnames'
import React, { FC } from 'react'

type PropsType = {
    label: any
    formik: any
    name: string
} 

const MyCheckbox: FC<PropsType> = ({label,formik, name}) => {

    const onSwitch = () => {
        formik.setFieldValue(name, !formik.values[name])
    }

    return (
        <div className="field-block field-block__checkbox">
            <div className={classNames("field-block__checkbox-input", {"checked": formik.values[name]})} 
                onClick={onSwitch} />
            <label className="field-block__checkbox-label">{label}</label>
        </div>
    )
}

export default MyCheckbox
