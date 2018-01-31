import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../assets/bootstrap.css']
})
export class AppComponent {
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

  public addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }
}
