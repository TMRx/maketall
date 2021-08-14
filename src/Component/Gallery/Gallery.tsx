import {useSelector} from "react-redux";
import {AppStateType} from "../../store/redux-store";
import {useEffect, useState} from "react";
import {FilterGalleryImages} from "./FilterGalleryImages";
import {GalleryItem} from "./GalleryItem";
import {SRLWrapper} from 'simple-react-lightbox'

import styled from 'styled-components'


const GalleryStyled = styled.div`
    width: 80%;
    margin: auto;
    display: grid;
    gap: 10px;
    @media (max-width: 400px){
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 401px){
        grid-template-columns: repeat(2, 1fr);
    }
     @media (min-width: 768px){
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1280px){
        grid-template-columns: repeat(4, 1fr);
    }
`

export const Gallery = () => {
    const gallery = useSelector((state: AppStateType) => state.gallery.gallery)
    const [tag, setTag] = useState<ImagesType>("all")
    const [filter, setFilter] = useState<typeof gallery>([])

    const onFilterChange = (value: ImagesType) => {
        setTag(value)
    }

    useEffect(() => {
        tag === "all" ? setFilter(gallery) : setFilter(gallery.filter(item => item.tag === tag))
    }, [tag])

    const options = {
        settings: {
            overlayColor: "rgba(0, 0, 0, 0.95)",
            autoplaySpeed: 1500,
            transitionSpeed: 900,
        },
        buttons: {
            backgroundColor: "rgba(254,45,23,0.4)",
            iconColor: "rgba(126, 172, 139, 0.8)",
        },
        caption: {
            captionColor: "#a6cfa5",
            captionFontFamily: "Raleway, sans-serif",
            captionFontWeight: "300",
            captionTextTransform: "uppercase",
        }
    };

    return (
        <section className='gallery'>
            <div className="gallery-container">
                <FilterGalleryImages
                    onFilterChange={onFilterChange}
                    tag={tag}
                />
                <SRLWrapper options={options}>
                    <GalleryStyled>
                        {filter.map(image => <GalleryItem
                            key={image.id}
                            imageName={image.imageName}
                        />)}
                    </GalleryStyled>
                </SRLWrapper>
            </div>
        </section>
    );
}

export type ImagesType = 'all' | 'transport' | 'arch' | 'imed' | 'presentation' | 'ozel'