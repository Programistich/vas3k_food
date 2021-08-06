import {Place} from "./Place";
import {Review} from "./Review";

export type User = {
    id: number, // айди в тг
    editor: boolean, // Юзер или редактор или читатель
    auth: boolean, // Верификацтия через Вастрик Апи
    link: string, // Ссылка на Вастрик ПРофиль
    dateRegistration: Date, // Дата регистарации
    countReview: number, // Количество отзывов (если едитор)
    countPlace: number, // Количество мест (если едитор)
    countList: number, // Количество списков (если едитор)
    listPlaceReview: Array<[Place, Review]> // Список мест + отзыв от человека (если едитор)
}