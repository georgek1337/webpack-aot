import { Component } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: 'book.component.html',
  styleUrls: ['book.component.css']
})
export class BookComponent {
  
  bookArray: Book[];
  constructor() {
    this.bookArray = [];
    for(let i = 0; i < 20; i++) {

        let c = new Book();
        c.Id = i+999;
        c.Item = "Book Item " + i;
        c.Weight = i*1.25;
        this.bookArray.push(c);
        
    }
  }


}


export class Book {
  public Id: Number;
  public Item: String;
  public Weight: Number;
}
