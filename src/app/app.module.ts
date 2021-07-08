import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicComponent } from './clinic/clinic.component';
import { CustumerComponent } from './custumer/custumer.component';
import { PetComponent } from './pet/pet.component';
import { RepairComponent } from './repair/repair.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ReportComponent } from './report/report.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from './ShareService';

const appRoutes:Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'clinic',
    component: ClinicComponent
  },
  {
    path: 'custumer',
    component: CustumerComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'repair',
    component: RepairComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    DashboardComponent,
    ClinicComponent,
    CustumerComponent,
    PetComponent,
    RepairComponent,
    MedicineComponent,
    ReportComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
