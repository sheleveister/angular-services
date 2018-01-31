import { Component, Output, EventEmitter } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss', '../../assets/bootstrap.css']
})
export class CarAddComponent {

  public carName = '';

  constructor(
    private carsService: CarsService,
  ) {}

  public addCar() {
    this.carsService.addCar(this.carName);
    this.carName = '';
  }

}
