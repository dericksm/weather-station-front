import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhDetailsComponent } from './pages/wh-details/wh-details';
import { WhListComponent } from './pages/wh-list/wh.list';

const routes: Routes = [
  {  path: "", component: WhListComponent },
  {  path: "wh/list", component: WhListComponent },
  {  path: "wh/details", component: WhDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
