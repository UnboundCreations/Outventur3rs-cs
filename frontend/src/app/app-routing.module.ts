import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComingSoonComponentComponent} from "./modules/coming-soon-component/coming-soon-component.component";

const routes: Routes = [
  { path: 'coming-soon', component: ComingSoonComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
