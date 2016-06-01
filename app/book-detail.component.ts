import { Component, Input } from '@angular/core';
import { AddressBook } from './book';

@Component({
  selector: 'my-addressBook-detail',
  template: `<div *ngIf="book">
				<h2>{{book.name}} {{book.surname}} details!</h2>
				<div><label>id: </label>{{book.id}}</div>
				<div>
					<label>Imie: </label>
					<input [(ngModel)]="book.name" placeholder="name">
				</div>
				<div>
					<label>Nazwisko: </label>
					<input [(ngModel)]="book.surname" placeholder="surname">
				</div>
			</div>`

})
export class AddressBookDetailComponent {
	@Input()
	book: AddressBook;
}