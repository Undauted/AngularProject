export class InMemoryDataService {
  createDb() {
    let address = [
	{ "id": 1, "name": "Jan", "surname": "Kowalski" },
	{ "id": 2, "name": "Piotr", "surname": "Kacprowicz" },
	{ "id": 3, "name": "Andrzej", "surname": "Nowak" },
	{ "id": 4, "name": "Karol", "surname": "Markowski" },
	{ "id": 5, "name": "Joanna", "surname": "Tracz" },
	{ "id": 6, "name": "Stefan", "surname": "Tusk" }
	];
	return {address};
  }
}