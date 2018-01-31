import { Component, Input } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss', '../../assets/bootstrap.css']
})
export class CarComponent {

  @Input() car;

  constructor(
    public carService: CarService,
  ) {}

  public getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  public onAction(type: string) {
    if (type === 'buy') {
      this.car.isSold = !this.car.isSold;
    }
    if (type === 'return') {
      this.car.isSold = !this.car.isSold;
    }
    this.carService.log(`${this.car.name} status = ${type}`);
  }

}
