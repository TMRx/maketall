import {ImagesType} from "./Gallery";
import {useSelector} from "react-redux";
import {AppStateType} from "../../store/redux-store";
import React, {useEffect} from "react";
type PropsType = {
    onFilterChange: (value: ImagesType) => void,
    tag: ImagesType
}
export const FilterGalleryImages:React.FC<PropsType> = ({onFilterChange, tag}) => {
    console.log(tag)
    const filterList = useSelector((state: AppStateType) => state.gallery.filterList)
    return (

        <ul className='gallery-filter-list'>
            {filterList.map(item => {
                return (
                    <li
                        className={item.value === tag ? 'active': ''}
                        key={item.id}

                        onClick={() => onFilterChange(item.value)}
                    >
                        {item.text}
                    </li>
                )
            })}
        </ul>
    )
}