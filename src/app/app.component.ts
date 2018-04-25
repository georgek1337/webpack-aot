import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'the toolkit app !!';
  custArray: Customer[];

  constructor() {
    this.custArray = [];
    for(let i = 0; i < 20; i++) {

        let c = new Customer();
        c.Address = "Address" + i;
        c.Age = i;
        c.Name = "Name" + i;
        this.custArray.push(c);
        
    }
  }


}


export class Customer {
  public Address: String;
  public Name: String;
  public Age: Number;
}
