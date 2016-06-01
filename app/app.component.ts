import {Component} from '@angular/core';

export class AddressBook {
  id: number;
  name: string;
  surname: string;
  
}
@Component({
    selector: 'projekt-angular',
    template: 	`<h1>{{title}}</h1>
				<h2>{{book.name}} {{book.surname}} details!</h2>
				<div><label>id: </label>{{book.id}}</div>
				<div>
					<label>Imie: </label>
					<input [(ngModel)]="book.name" placeholder="name">
			    </div>
				<div>
					<label>Nazwisko: </label>
					<input [(ngModel)]="book.surname" placeholder="surname">
			    </div>`
})
export class AppComponent {
  title = 'Projekt Angular - Piotr Kacprowicz';
  book: AddressBook = {
	  id: 1,
	  name: 'Jan'
	  surname: 'Kowalski'
	};
}

var HEROES: Hero[] = [
{ "id": 1, "name": "Jan", "surname": "Kowalski" },
{ "id": 2, "name": "Piotr", "surname": "Kacprowicz" },
{ "id": 3, "name": "Andrzej", "surname": "Nowak" },
{ "id": 4, "name": "Karol", "surname": "Markowski" },
{ "id": 5, "name": "Joanna", "surname": "Tracz" },
{ "id": 6, "name": "Stefan", , "surname": "Tusk" }
];
