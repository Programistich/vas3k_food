import { Rating } from './Rating';
import { TypeCuisine } from './TypeCuisine';

export interface Place {
  link: string; // Ссылка
  name: string; // Название места (с Гугла)
  address: string; // Адресс (с Гугла)
  cuisine: TypeCuisine; // Тип кухня (с Гугла)
  price: Price; // Цена от 1-3 (с Гугла)
  rate: Rating; // Рейтинг от человека
  googleRate: string; // Рейтинг (с Гугла)
}

enum Price {
  '$',
  '$$',
  '$$$',
}
