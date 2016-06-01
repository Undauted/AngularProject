import {Component} from '@angular/core';
import { AddressBook } from './book';
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
				</ul>`,
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
			`]
})
export class AppComponent {
	title = 'Projekt Angular - Piotr Kacprowicz';
	selectedBook: AddressBook;
	address = BOOK;
	
	onSelect(book: AddressBook) { this.selectedBook = book; }
}

var BOOK: AddressBook[] = [
{ "id": 1, "name": "Jan", "surname": "Kowalski" },
{ "id": 2, "name": "Piotr", "surname": "Kacprowicz" },
{ "id": 3, "name": "Andrzej", "surname": "Nowak" },
{ "id": 4, "name": "Karol", "surname": "Markowski" },
{ "id": 5, "name": "Joanna", "surname": "Tracz" },
{ "id": 6, "name": "Stefan", "surname": "Tusk" }
];
