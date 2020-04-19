import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhListComponent } from './pages/wh-list/wh.list';
import { WhDetailsComponent } from './pages/wh-details/wh-details';

const routes: Routes = [
  {  path: "", component: WhListComponent },
  {  path: "wh/list", component: WhListComponent },
  {  path: "wh/details/:id", component: WhDetailsComponent },
  {  path: "**", component: WhListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
