import React, { FC, useState } from 'react'
import classNames from "classnames"

type PropsType = {
    label: string
    placeholder: string
    values: string[]
    formik: any
    name: string
}

const MySelect: FC<PropsType> = ({
    label, 
    placeholder, 
    values,
    formik,
    name
}) => {

    const [isActive, setIsActive] = useState(false)

    const switchIsActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if(!isActive) {
            e.currentTarget.setAttribute('tabindex', "1")
            e.currentTarget.focus()
            setIsActive(true)
        } else {
            e.currentTarget.blur()
            setIsActive(false)
        }
    }

    const onSelect = (val: string) => {
        formik.setFieldValue(name, val)
        setIsActive(false)
    }

    const onBlur = () => {
        setIsActive(false)
    }

    return (
        <div className="field-block">
            <label className="field-block__label">{label}</label>
            <div className="field-block__input-wrapper">
                <div className={classNames("field-block__input", {"active": isActive})}
                    onClick={switchIsActive}
                    onBlur={onBlur}
                >
                </div>
                {isActive && <ul className="field-block__select">
                     {values.map(val => (
                        <li key={val} className="field-block__select__item"
                            onMouseDown={() => onSelect(val)}
                        >{val}</li>
                    ))}
                </ul>}
                    
                <div className="field-block__placeholder">
                    <div className={classNames("field-block__input-text", {"entered-text": formik.getFieldProps(name).value})}>{formik.getFieldProps(name).value || placeholder}</div>
                    <div className="field-block__input-icon">
                        <svg width="16" height="9" viewBox="0 0 16 9" fill="rgb(8, 128, 174)" xmlns="http://www.w3.org/2000/svg">
                            <path fill={isActive ? "rgb(8, 128, 174)" : "rgb(219, 226, 234)"} d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MySelect
