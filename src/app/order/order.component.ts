import { Component } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: 'order.component.html',
  styleUrls: ['order.component.css']
})
export class OrderComponent {
  
  orderArray: Order[];
  constructor() {
    this.orderArray = [];
    for(let i = 0; i < 20; i++) {

        let c = new Order();
        c.Id = i;
        c.Item = "Order Item " + i;
        c.Weight = i*1.25;
        this.orderArray.push(c);
        
    }
  }


}


export class Order {
  public Id: Number;
  public Item: String;
  public Weight: Number;
}
