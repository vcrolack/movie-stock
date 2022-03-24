import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LogintRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [LoginComponent, LogintRoutingModule]
})
export class LoginModule { }
