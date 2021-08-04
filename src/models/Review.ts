import {User} from "./User";
import {Place} from "./Place";
import {Rating} from "./Rating";

export interface Review{
    rate: Rating // Рейтинг от человека
    description: string, // Описание
    user: User, // Человек
    anonymous: boolean, // Анонимный юзер
    dateAdd: Date, // Дата добавления отзыва
    place: Place // Место заведения
}