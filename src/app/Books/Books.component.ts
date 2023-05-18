import { UserDataService } from '../UserData.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from 'Models/Book';
import { User } from 'Models/User';
import { BookDataService } from './BookData.service';

@Component({
  selector: 'app-Books',
  templateUrl: './Books.component.html',
  styleUrls: ['./Books.component.css']
})
export class BooksComponent implements OnInit {

  


  
  

  showAll: boolean = true;
  showUnavailable: boolean = false;
  showAvailable: boolean = false;


  issueModal: boolean = false;
  bookModal: boolean = false;

  formData!: FormGroup;
  issueData!: FormGroup;
  filterData!: FormGroup;

  constructor(private ds: UserDataService, private bds: BookDataService) { }

  availableBooks = this.bds.getAvailable();
  unavailableBooks = this.bds.getUnavailable();
  books = this.bds.getAllBooks();

  users: Array<User> = this.ds.getData();
  

  ngOnInit() {
    // this.formData = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   author: new FormControl('', Validators.required),
    //   category: new FormControl('', Validators.required),
    //   tags: new FormControl('', Validators.required),
    //   status: new FormControl('', Validators.required),
    // })

    this.filterData = new FormGroup({
      filterValue: new FormControl('')
    });

    this.issueData = new FormGroup({
      user_id: new FormControl('', Validators.required),
      book_id: new FormControl('', Validators.required)
    });
    
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
        if (item.Id == book_id) {
          if (item.status == 0) {
            flag = 0
          }
          else {
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
          if (book.Id == book_id) {
            this.availableBooks.splice(index, 1);
          }
        });
        // console.log(this.availableBooks);

        this.unavailableBooks.push(selectedBook);
        // console.log(this.unavailableBooks);

        this.users.forEach((item) => {
          if (item.id == user_id) {
            item.books.push(selectedBook);
          }
        });
        // console.log(this.users); 
        this.issueData.reset();
      }
      else {
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

  filterBooks() {
    let ctrl = this.filterData.controls;
    if (ctrl['filterValue'].getRawValue() == 'all') {
      this.showAll = true;
      this.showAvailable = false;
      this.showUnavailable = false;
    }
    else if (ctrl['filterValue'].getRawValue() == 'unavailable') {
      this.showAll = false;
      this.showAvailable = false;
      this.showUnavailable = true;
      console.log(this.unavailableBooks);
      
    }
    else if (ctrl['filterValue'].getRawValue() == 'available') {
      this.showAll = false;
      this.showAvailable = true;
      this.showUnavailable = false;
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



