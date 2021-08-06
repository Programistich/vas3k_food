import {Rating} from "./Rating";

export type Place = {
    link: string, // Ссылка
    name: string, // Название места (с Гугла)
    address: string, // Адресс (с Гугла)
    cuisine: string, // Тип кухня (с Гугла)
    price: Price, // Цена от 1-3 (с Гугла)
    rate: Rating, // Рейтинг от человека
    googleRate: string // Рейтинг (с Гугла)
}

enum Price{
    "$",
    "$$",
    "$$$",
}