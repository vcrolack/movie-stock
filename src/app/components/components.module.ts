import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { CartComponent } from './cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ModalComponent, CartComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  exports: [ModalComponent, CartComponent]
})
export class ComponentsModule { }
