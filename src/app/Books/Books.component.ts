import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from 'Models/Book';
import { User } from 'Models/User';

@Component({
  selector: 'app-Books',
  templateUrl: './Books.component.html',
  styleUrls: ['./Books.component.css']
})
export class BooksComponent implements OnInit {

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
  users: Array<User> = [
    {
      "id": 1,
      "name": "John Smith",
      "books": []
    },
    {
      "id": 2,
      "name": "Emily Johnson",
      "books": []
    },
    {
      "id": 3,
      "name": "Michael Williams",
      "books": []
    },
    {
      "id": 4,
      "name": "Sophia Brown",
      "books": []
    },
    {
      "id": 5,
      "name": "Daniel Jones",
      "books": []
    },
    {
      "id": 6,
      "name": "Olivia Davis",
      "books": []
    },
    {
      "id": 7,
      "name": "Matthew Miller",
      "books": []
    },
    {
      "id": 8,
      "name": "Emma Wilson",
      "books": []
    },
    {
      "id": 9,
      "name": "Christopher Taylor",
      "books": []
    },
    {
      "id": 10,
      "name": "Ava Anderson",
      "books": []
    }
  ];

  availableBooks: Array<Book> = [];
  unavailableBooks: Array<Book> = [];
  

  issueModal: boolean = false;
  bookModal: boolean = false;

  formData!: FormGroup;
  issueData!: FormGroup;

  constructor() { }

  ngOnInit() {
    // this.formData = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   author: new FormControl('', Validators.required),
    //   category: new FormControl('', Validators.required),
    //   tags: new FormControl('', Validators.required),
    //   status: new FormControl('', Validators.required),
    // })
    
    this.issueData = new FormGroup({
      user_id: new FormControl('', Validators.required),
      book_id: new FormControl('', Validators.required)
    });
    this.availableBooks = [{
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
  }

  issueBook() {
    this.toggleModal();

    if (this.issueData.invalid) {
      alert('Invalid data entered to issue book.');
    }
    else {
      let ctrl = this.issueData.controls;
      let user_id = ctrl['user_id'].getRawValue();
      let book_id = ctrl['book_id'].getRawValue();
      let selectedBook: any;
      let flag: any;

      this.books.forEach((item) => {
        if(item.Id == book_id) {
          if(item.status == 0) {
            flag = 0
          }
          else{
            flag = 1;
          }
        }
      });
      if (flag == 1) {
        this.books.forEach((item) => {
          if (item.Id == book_id) {
            selectedBook = item;
            item.status = 0;
          }
        });
        this.availableBooks.forEach((book, index) => {
          if(book.Id == book_id) {
            this.availableBooks.splice(index, 1);
          }
        });
        console.log(this.availableBooks);
        
        this.unavailableBooks.push(selectedBook);
        console.log(this.unavailableBooks);
        
        this.users.forEach((item) => {
          if (item.id == user_id) {
            item.books.push(selectedBook);
          }
        });
        console.log(this.users);
      }
      else{
        alert('Book already issued to someone else.');
      }
    }
  }


  toggleModal() {
    if (this.issueModal) {
      this.issueModal = !this.issueModal;
    }
    else {
      this.issueModal = !this.issueModal;
    }
  }

  // addBook() {
  //   if (this.bookModal) {
  //     this.bookModal = !this.bookModal;
  //   }
  //   else {
  //     let ctrl = this.formData.controls;
  //     let b1: Book = {
  //       Id: Math.floor(Math.random() * 1000),
  //       title: ctrl['title'].getRawValue(),
  //       author: ctrl['author'].getRawValue(),
  //       category: ctrl['category'].getRawValue(),
  //       tags: ctrl['tags'].getRawValue(),
  //       status: ctrl['status'].getRawValue()
  //     }
  //     console.log(b1);
  //     this.books.push(b1);
  //     this.bookModal = !this.bookModal;

  //   }
  // }
}



