import { Component, OnInit } from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/bootstrap.css']
})
export class AppComponent implements OnInit {

  private cars = [];

  constructor(
    public carsService: CarsService,
  ) { }

  public ngOnInit() {
    this.cars = this.carsService.cars;
  }

  public addCarToList(carName: string) {
    this.carsService.addCar(carName);
  }
}
