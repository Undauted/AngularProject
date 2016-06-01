import { Component, OnInit } from '@angular/core';

import { AddressBook } from './book';
import { AddressBookDetailComponent } from './book-detail.component';
import { BookService } from './addressBook.service';
@Component({
    selector: 	'projekt-angular',
    template: 	`<h1>{{title}}</h1>
				<h2>Ksiażka adresowa</h2>
				<ul class="address">
				  <li *ngFor="let book of address" 
					   (click)="onSelect(book)"
					   [class.selected]="book === selectedBook">
					 <span class="badge">{{book.id}}</span> {{book.name}} {{book.surname}}
				  </li>
				</ul>
				<my-addressBook-detail [book]="selectedBook"></my-addressBook-detail>`,
	styles:[`
			  .selected {
				background-color: #CFD8DC !important;
				color: white;
			  }
			  .address {
				margin: 0 0 2em 0;
				list-style-type: none;
				padding: 0;
				width: 15em;
			  }
			  .address li {
				cursor: pointer;
				position: relative;
				left: 0;
				background-color: #EEE;
				margin: .5em;
				padding: .3em 0;
				height: 1.6em;
				border-radius: 4px;
			  }
			  .address li.selected:hover {
				background-color: #BBD8DC !important;
				color: white;
			  }
			  .address li:hover {
				color: #607D8B;
				background-color: #DDD;
				left: .1em;
			  }
			  .address .text {
				position: relative;
				top: -3px;
			  }
			  .address .badge {
				display: inline-block;
				font-size: small;
				color: white;
				padding: 0.8em 0.7em 0 0.7em;
				background-color: #607D8B;
				line-height: 1em;
				position: relative;
				left: -1px;
				top: -4px;
				height: 1.8em;
				margin-right: .8em;
				border-radius: 4px 0 0 4px;
			  }
			`],
	directives: [AddressBookDetailComponent],
	providers: [BookService]
})
export class AppComponent implements OnInit {
  title = 'Projekt Angular - Piotr Kacprowicz';
  address: AddressBook[];
  selectedBook: AddressBook;

  constructor(private bookService: BookService) { }

  getBook() {
    this.bookService.getBook().then(address => this.address = address);
  }

  ngOnInit() {
    this.getBook();
  }

  onSelect(book: AddressBook) { this.selectedBook = book; }
}


