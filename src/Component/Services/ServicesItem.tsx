
import React from "react";


type PropsType = {
    src: string
    header: string
    children: JSX.Element[] | JSX.Element
}

export const ServicesItem:React.FC<PropsType> = ({src,header,children}) => {

    return (
        <li>
            <div className="aboutPage-wrapper-img">
                <img src={src} alt="приклад робіт" width="100%"/>
            </div>
            <div className="aboutPage-description">
                <h3>{header}</h3>
                {children}
            </div>
        </li>
    )


}