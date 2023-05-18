import { Injectable } from '@angular/core';
import { Book } from 'Models/Book';

@Injectable()
export class BookDataService {

    books: Array<Book> = [{
        "Id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "tags": ["classics", "race relations", "Southern States"],
        "status": 1
    },
    {
        "Id": 2,
        "title": "1984",
        "author": "George Orwell",
        "category": "Fiction",
        "tags": ["dystopian", "political satire", "surveillance"],
        "status": 1
    },
    {
        "Id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Fiction",
        "tags": ["romance", "wealth", "jazz age"],
        "status": 1
    },
    {
        "Id": 4,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel Garcia Marquez",
        "category": "Fiction",
        "tags": ["magical realism", "family saga", "Latin America"],
        "status": 1
    },
    {
        "Id": 5,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Fiction",
        "tags": ["romance", "social satire", "Regency era"],
        "status": 1
    },
    {
        "Id": 6,
        "title": "Animal Farm",
        "author": "George Orwell",
        "category": "Fiction",
        "tags": ["political allegory", "satire", "animals"],
        "status": 1
    },
    {
        "Id": 7,
        "title": "Lord of the Flies",
        "author": "William Golding",
        "category": "Fiction",
        "tags": ["island survival", "power struggles", "human nature"],
        "status": 1
    },
    {
        "Id": 8,
        "title": "Jane Eyre",
        "author": "Charlotte Bronte",
        "category": "Fiction",
        "tags": ["romance", "gothic", "Victorian era"],
        "status": 1
    },
    {
        "Id": 9,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "tags": ["coming-of-age", "alienation", "post-World War II"],
        "status": 1
    },
    {
        "Id": 10,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fiction",
        "tags": ["fantasy", "adventure", "Middle-earth"],
        "status": 1
    },
    {
        "Id": 11,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "category": "Fiction",
        "tags": ["coming-of-age", "adventure", "race relations"],
        "status": 1
    },
    ];

    availableBooks: Array<Book> = [{
        "Id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "category": "Fiction",
        "tags": ["classics", "race relations", "Southern States"],
        "status": 1
    },
    {
        "Id": 2,
        "title": "1984",
        "author": "George Orwell",
        "category": "Fiction",
        "tags": ["dystopian", "political satire", "surveillance"],
        "status": 1
    },
    {
        "Id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "category": "Fiction",
        "tags": ["romance", "wealth", "jazz age"],
        "status": 1
    },
    {
        "Id": 4,
        "title": "One Hundred Years of Solitude",
        "author": "Gabriel Garcia Marquez",
        "category": "Fiction",
        "tags": ["magical realism", "family saga", "Latin America"],
        "status": 1
    },
    {
        "Id": 5,
        "title": "Pride and Prejudice",
        "author": "Jane Austen",
        "category": "Fiction",
        "tags": ["romance", "social satire", "Regency era"],
        "status": 1
    },
    {
        "Id": 6,
        "title": "Animal Farm",
        "author": "George Orwell",
        "category": "Fiction",
        "tags": ["political allegory", "satire", "animals"],
        "status": 1
    },
    {
        "Id": 7,
        "title": "Lord of the Flies",
        "author": "William Golding",
        "category": "Fiction",
        "tags": ["island survival", "power struggles", "human nature"],
        "status": 1
    },
    {
        "Id": 8,
        "title": "Jane Eyre",
        "author": "Charlotte Bronte",
        "category": "Fiction",
        "tags": ["romance", "gothic", "Victorian era"],
        "status": 1
    },
    {
        "Id": 9,
        "title": "The Catcher in the Rye",
        "author": "J.D. Salinger",
        "category": "Fiction",
        "tags": ["coming-of-age", "alienation", "post-World War II"],
        "status": 1
    },
    {
        "Id": 10,
        "title": "The Hobbit",
        "author": "J.R.R. Tolkien",
        "category": "Fiction",
        "tags": ["fantasy", "adventure", "Middle-earth"],
        "status": 1
    },
    {
        "Id": 11,
        "title": "The Adventures of Huckleberry Finn",
        "author": "Mark Twain",
        "category": "Fiction",
        "tags": ["coming-of-age", "adventure", "race relations"],
        "status": 1
    }];

    unavailableBooks: Array<Book> = [];
    
    constructor() { }

    getAllBooks() {
        return this.books;
    }
    getUnavailable() {
        return this.unavailableBooks;
    }
    getAvailable() {
        return this.availableBooks;
    }

}
