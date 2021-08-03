import {Rating} from "./Rating";

export interface Place{
    address: string,
    cuisine: string,
    type: TypeCuisine,
    rate: Rating,
    googleRate: string
}

enum TypeCuisine{

}