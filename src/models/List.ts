import {User} from "./User";
import {Place} from "./Place";

export interface List{
    name: string,
    description: string,
    author: User,
    anonymous: boolean,
    places: Array<Place>
}