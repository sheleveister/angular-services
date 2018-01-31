import { Injectable } from '@angular/core';
import { CarService } from './car.service';

@Injectable()
export class CarsService {

  constructor(
    private carService: CarService,
  ) {}

  public cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  public addCar(name: string) {
    this.cars.push({ isSold: false, name });
    this.carService.log(`Car ${name} was added`);
  }

}
