import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhListComponent } from './pages/wh-list/wh.list';
import { HttpClientModule } from '@angular/common/http';
import { WhDetailsNovoComponent } from './pages/wh-details-seila/wh-details';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    AppComponent,
    WhListComponent,
    WhDetailsNovoComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
