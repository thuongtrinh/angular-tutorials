import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookService } from 'src/app/services/book.service';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BookRoutingModule
  ],
  declarations: [
    BookComponent,
    BookAddComponent,
    BookDetailComponent,
    BookUpdateComponent
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
