import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhyRoutingModule } from './why-routing.module';
import { WhyPageComponent } from './components/why-page/why-page.component';


@NgModule({
  declarations: [
    WhyPageComponent
  ],
  imports: [
    CommonModule,
    WhyRoutingModule
  ]
})
export class WhyModule { }
