import { Place } from './Place';
import { Review } from './Review';

export interface User {
  id: number; // айди в тг
  type: UserType; // Юзер или редактор или читатель
  auth: boolean; // Верификацтия через Вастрик Апи
  link: string; // Ссылка на Вастрик ПРофиль
  nickname: string; // Никнейм в тг? а если его нет
  dateRegistration: Date; // Дата регистарации
  countReview: number; // Количество отзывов (если едитор)
  countPlace: number; // Количество мест (если едитор)
  countList: number; // Количество списков (если едитор)
  listPlaceReview: Array<[Place, Review]>; // Список мест + отзыв от человека (если едитор)
}

enum UserType {
  'reader',
  'editor',
}
