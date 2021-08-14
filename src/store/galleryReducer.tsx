import { filterList } from "./galleryObjects/gallaryFilter";
import {archImage, imedImage, presentationImage, transportImage, ozel} from "./galleryObjects/galleryImages";

const initialState = {
    gallery: [
        ...transportImage,
        ...archImage,
        ...imedImage,
        ...presentationImage,
        ...ozel
    ],
    filterList: [...filterList]
}

export const galleryReducer = (state:StateType = initialState, action:any):StateType => {
    return state
}

type StateType = typeof initialState