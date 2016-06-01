import { Injectable } from '@angular/core';

import { AddressBook } from './book';
import { BOOK } from './mock';

@Injectable()
export class BookService {
  getBook() {
    return Promise.resolve(BOOK);
  }
  // See the "Take it slow" appendix
  getBookSlowly() {
    return new Promise<AddressBook[]>(resolve =>
      setTimeout(()=>resolve(BOOK), 2000) // 2 seconds
    );
  }
  
  getId(id: number) {
	return Promise.resolve(BOOK).then(
    address => address.filter(book => book.id === id)[0]
	);
  }
}