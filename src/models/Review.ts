import {User} from "./User";
import {Place} from "./Place";
import {Rating} from "./Rating";

export interface Review{
    rate: Rating
    description: string,
    user: User,
    anonymous: boolean,
    dateAdd: Date,
    place: Place
}