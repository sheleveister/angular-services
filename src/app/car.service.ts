import { Injectable } from '@angular/core';

@Injectable()
export class CarService {

  public log(str: string) {
    console.log(str);
  }
}
