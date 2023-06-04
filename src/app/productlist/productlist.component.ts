import { Component } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  // show: boolean = true;
  selectedProduct?: any = [];
  i = 0;
  isClicked?: boolean;
  removedProduct?: any;
  
  products = [
    {
      id: 1001,
      name: 'Android TV',
      brand: 'Samsung',
    },
    {
      id: 1002,
      name: 'Electric Lamp',
      brand: 'Midea',
    },
    {
      id: 1003,
      name: 'Refrigerator',
      brand: 'Toshiba'
    }
  ]
  onSelectedProduct(selectedProd: any, index: any){
    let length = this.selectedProduct.length;
    this.selectedProduct[length] = selectedProd;
    // this.selectedProduct[this.i] = selectedProd;
    // this.i ++;
    // this.isClicked = true;
    console.log("length >>", length)
    console.log("product >>" , selectedProd);
    console.log("selected product array >>", this.selectedProduct)
  }
  getSelectedProduct(){
    return this.selectedProduct;
  }
  removeNoti(event: any){
    this.removedProduct = event.name;
    console.log("removed product event name >>", event.name)

  }
}
