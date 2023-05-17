import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Book } from 'Models/Book';

@Component({
  selector: 'app-Books',
  templateUrl: './Books.component.html',
  styleUrls: ['./Books.component.css']
})
export class BooksComponent implements OnInit {

  books: Array<Book> = [];
  bookModal: boolean = false;

  formData!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    })

  }


  addBook() {
    if (this.bookModal) {
      this.bookModal = !this.bookModal;
    }
    else {
      this.bookModal = !this.bookModal;
      if (this.formData.invalid) {
        alert('Invalid Data entered.')
      }
      else {
        let ctrl = this.formData.controls;
        let b1: Book = {
          id: Math.floor(Math.random() * 1000),
          title: ctrl['title'].getRawValue(),
          author: ctrl['author'].getRawValue(),
          category: ctrl['category'].getRawValue(),
          tags: ctrl['tags'].getRawValue(),
          status: ctrl['status'].getRawValue()
        }
        console.log(b1);
        this.bookModal = !this.bookModal;
      }
    }
  }
}



