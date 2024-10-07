import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BenefitsApplicationListComponent } from './benefits-application-list/benefits-application-list.component';
import { AddBenefitsApplicationComponent } from './add-benefits-application/add-benefits-application.component';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [
    AppComponent,
    BenefitsApplicationListComponent,
    AddBenefitsApplicationComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    AmplifyAuthenticatorModule,
    HttpClientModule,FormsModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule,MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
