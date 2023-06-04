import { Component, EventEmitter, Input , Output} from '@angular/core';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent {
  @Input() selectedProduct?: any;
  @Output() removeEvent = new EventEmitter();

  // removedproduct?: any = [];

  removedProduct(product: any, index: any){
    this.removeEvent.emit(product);
    let deleted = this.selectedProduct.splice(index, 1);
    console.log("removed product >> ", deleted)
  }
  
}
