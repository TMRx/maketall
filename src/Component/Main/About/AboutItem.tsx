
import React from "react";


type PropsType = {
    src: string
    header: string
}

export const AboutItem:React.FC<PropsType> = ({src, header}) => {

    return (
        <li className="about-list-item">
            <div className="about-wrapper-img">
                <img src={src} alt="приклад робіт" width="100%"/>
                <div className="about-border"/>
            </div>
            <div className="about-text-description">
                <h3>{header}</h3>
            </div>
        </li>
    )
}