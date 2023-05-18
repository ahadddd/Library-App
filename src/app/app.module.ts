import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { BooksComponent } from './Books/Books.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './Users/Users.component';
import { CommonModule } from '@angular/common';
import { UserDataService } from './UserData.service';
import { ArrayToTDPipe } from './Users/ArraytoTD.pipe';
import { BookDataService } from './Books/BookData.service';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    UsersComponent,
    ArrayToTDPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
      {
        path: 'books',
        component: BooksComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ])
  ],
  providers: [UserDataService, BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
