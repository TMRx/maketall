import {Path, UseFormRegister} from "react-hook-form";
import React from "react";

import styled from "styled-components";

const Errors = styled.p`
    position: absolute;
    font-size: 14px;
    top: -15px;

`

type IFormValues = {
  name: string
    tel: string
    email: string
}



type PropsTypes = {
    labelName: string
    type: 'text' | 'email' | 'tel'
    register: UseFormRegister<IFormValues>;
    label: Path<IFormValues>;
    svg: string
    errors:any
    required:boolean
}

export const Input:React.FC<PropsTypes> = ({labelName,
                                               type, label, register,
                                               svg, errors, required}) => {


    return (
        <div className="group">
            <label
                className={errors[label] ? "form-label error": "form-label"}
                htmlFor={label}
            >
                {labelName}
            </label>
            <input
                className={errors[label] ? "form-input error": "form-input" }
                type={type}
                id={label}
//            @ts-ignore
                {...register(label,{required})}/>
            {errors[label] && <Errors>{labelName} - обов'язкове поле</Errors>}

            <span>
                            <svg className="modal-icon">
                                <use href={svg}></use>
                            </svg>
                        </span>

        </div>
    )


}