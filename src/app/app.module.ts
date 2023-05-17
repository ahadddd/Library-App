import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { BooksComponent } from './Books/Books.component';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './Users/Users.component';

@NgModule({
  declarations: [		
    AppComponent,
      BooksComponent,
      UsersComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
