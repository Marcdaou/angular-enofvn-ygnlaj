import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FetchFromCsvComponent } from './fetch-from-csv/fetch-from-csv.component';
import { FormFirstComponent } from './form-first/form-first.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { ServService } from './serv.service';
import { NewSingleComponent } from './new-single/new-single.component';
import { F3Component } from './f3/f3.component';


@NgModule({
  imports: [
    BrowserModule,
    MatDatepickerModule, MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'samsung', component: ProductListComponent },
      { path: '', component: HomePageComponent },
      { path: 'csv', component: FetchFromCsvComponent },
      { path: 'form1', component: FormFirstComponent },
      { path: 'singleComponent', component: NewSingleComponent },
      { path: 'f3', component: F3Component },

    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    HomePageComponent,
    FetchFromCsvComponent,
    FormFirstComponent,
    NewSingleComponent,
    F3Component,

  ],
  bootstrap: [ AppComponent ],
  providers: [ServService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/