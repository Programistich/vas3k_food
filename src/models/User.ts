import {Place} from "./Place";
import {Review} from "./Review";

export interface User {
    type: UserType,
    auth: boolean,
    nickname: string,
    countReview: number,
    dateRegistration: Date,
    countAddPlace: number,
    countAddList: number,
    listPlaceReview: Array<[Place, Review]>
}

enum UserType {
    "reader",
    "editor"
}