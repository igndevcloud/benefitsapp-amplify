import { Routes } from '@angular/router';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { AddBenefitsApplicationComponent } from './add-benefits-application/add-benefits-application.component';

const routes: Routes = [
  {path:"show-all-benefits-applications",component: BenefitsApplicationListComponent},
  {path:"add-benefits-application", component: AddBenefitsApplicationComponent},
  {path:'', redirectTo: "home", pathMatch:"full"},
];
