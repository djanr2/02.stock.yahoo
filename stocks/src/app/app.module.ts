import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {StocksService} from "./services/stocks.service";
import { SummaryComponent } from './components/summary/summary.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import {FormsModule} from "@angular/forms";
import {AppRoutes} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
