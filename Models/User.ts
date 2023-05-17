import { Book } from "./Book";

export interface User {
    id: number;
    name: string;
    books: Array<Book>;
}