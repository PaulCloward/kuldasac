import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';


@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SignInRoutingModule
  ]
})
export class SignInModule { }
