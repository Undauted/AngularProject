import { Component, OnInit } from '@angular/core';

import { AddressBook } from './book';
import { AddressBookDetailComponent } from './book-detail.component';
import { BookService } from './addressBook.service';
import { Router } from '@angular/router-deprecated';
@Component({
    selector: 	'my-book',
    templateUrl: 'app/book.component.html',
	styleUrls:  ['app/book.component.css'],
	directives: [AddressBookDetailComponent]
})
export class BookComponent implements OnInit {

  address: AddressBook[];
  selectedBook: AddressBook;

  constructor(	private router: Router,
				private bookService: BookService) { }

  getBook() {
    this.bookService.getBook().then(address => this.address = address);
  }

  ngOnInit() {
    this.getBook();
  }

  onSelect(book: AddressBook) { this.selectedBook = book; }
  gotoDetail() {
  this.router.navigate(['BookDetail', { id: this.selectedBook.id }]);
  }
}


