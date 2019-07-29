import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ROUND_ANTICLOCK_ANIMATION } from 'src/app/animations/round-anticlock.animation';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styles: [
    ':host { position: absolute; top: 20%; left: 5%; border: 3px solid black; }'
  ],
  animations: [ROUND_ANTICLOCK_ANIMATION]
})
export class BookAddComponent implements OnInit {
  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  book = new Book();

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Book add start');
  }

  add() {
    this.bookService
      .addBook(this.book)
      .then(() => this.router.navigate([{ outlets: { bookPopup: null } }]));
  }

  close() {
    this.router.navigate([{ outlets: null }], { relativeTo: this.route });
  }
}
