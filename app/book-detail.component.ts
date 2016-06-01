import { Component, OnInit } from '@angular/core';
import { AddressBook } from './book';
import { RouteParams } from '@angular/router-deprecated';
import { BookService } from './addressBook.service';

@Component({
  selector: 'my-addressBook-detail',
  templateUrl: 'app/book-detail.component.html',
  styleUrls: ['app/book-detail.component.css']

})
export class AddressBookDetailComponent implements OnInit {

	book: AddressBook;
	constructor(
		private bookService: BookService,
		private routeParams: RouteParams) {}
		
	ngOnInit() {
    let id = +this.routeParams.get('id');
    this.bookService.getId(id).then(book => this.book = book);
	}
	
	goBack() {
	  window.history.back();
	}
}