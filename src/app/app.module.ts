import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarAddComponent } from './car-add/car-add.component';
import { FormsModule } from '@angular/forms';
import { CarService } from './car.service';
import { CarsService } from './cars.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    CarService,
    CarsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
