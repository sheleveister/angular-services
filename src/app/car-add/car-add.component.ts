import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss', '../../assets/bootstrap.css']
})
export class CarAddComponent {

  @Output() onCarAdd = new EventEmitter<String>();

  public carName= '';

  public addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }

}
