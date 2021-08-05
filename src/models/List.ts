import { User } from './User';
import { Place } from './Place';

export interface List {
  name: string; // Названия списка
  description: string; // Описания списка
  author: User; // Кто составил
  places: Array<Place>; // Список мест
}
