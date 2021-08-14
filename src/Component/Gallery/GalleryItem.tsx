import React from "react";
import styled from "styled-components";

type PropsType = {
    imageName: string
}

const Img = styled.img`
    width: 100%
`

const CardWrapper = styled.div`
        
//    padding: 5px;
//     border: 1px solid #ddd;
//    border-radius: 2px;
`


export const GalleryItem:React.FC<PropsType> = ({imageName}) => {
    return <CardWrapper className='gallery__card'>
        <a href={imageName}>
        <Img
            src={imageName}
            alt='example of my work'
        />
        </a>
    </CardWrapper>

}