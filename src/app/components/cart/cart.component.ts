import { AfterContentChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterContentChecked {

  cart!: any[];

  constructor() {
    localStorage.setItem('cart', JSON.stringify([]));
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '{}');
  }
}
