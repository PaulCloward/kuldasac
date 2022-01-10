import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhyPageComponent } from './components/why-page/why-page.component';

const routes: Routes = [{
  path: '',
  component: WhyPageComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhyRoutingModule { }
