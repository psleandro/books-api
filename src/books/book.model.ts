export class Book {
  id: number;
  code: string;
  name: string;
  price: number;

  constructor(name: string, price: number, code: string) {
    this.name = name;
    this.price = price;
    this.code = code;
  }
}
