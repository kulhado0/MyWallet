import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddRegistroDeCompraComponent } from './add-registro-de-compra/add-registro-de-compra.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MainChartComponent } from './main-chart/main-chart.component';

// Chart.js
import { ChartModule } from 'angular2-chartjs';
import { SidebarComponent } from './sidebar/sidebar.component';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddRegistroDeCompraComponent,
    MainChartComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NoopAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    ChartModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
