import {ImagesType} from "../../Component/Gallery/Gallery";

export const filterList = [
    // {id: '1', value: 'all', text: 'Всі Макети'},
    {id: '2', value: 'arch', text: 'Архітектурні споруди'},
    {id: '3', value: 'imed', text: 'Іміджеві'},
    {id: '4', value: 'transport', text: 'Моделі транспорту'},
    {id: '5', value: 'presentation', text: 'Презентаційні'},
    {id: '6', value: 'ozel', text: "Озеленення об'єктів"},

] as Array<FilterType>
type FilterType = {
    id: string,
    value: ImagesType
    text: string
}