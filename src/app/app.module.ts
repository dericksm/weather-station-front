import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhListComponent } from './pages/wh-list/wh.list';
import { HttpClientModule } from '@angular/common/http';
import { WhDetailsComponent } from './pages/wh-details/wh-details';
import { DxDataGridModule } from 'devextreme-angular';
import { DxDateBoxModule } from "devextreme-angular";
import { DxButtonModule } from "devextreme-angular";



@NgModule({
  declarations: [
    AppComponent,
    WhListComponent,
    WhDetailsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
