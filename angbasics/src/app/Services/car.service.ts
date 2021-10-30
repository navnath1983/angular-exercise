import { Injectable } from '@angular/core';
import { Cars } from '../Models/car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  carsInfo:Cars[];

  constructor() { 
    this.carsInfo = [
      new Cars('Alto', 'Maruti', 400000, 2015, './assets/alto.jpg', false ),
      new Cars('BMW-350', 'BMW', 5500000, 2000, './assets/bmw.jpg', false ),
      new Cars('Swift', 'Maruti', 600000, 2020, './assets/swift.jpg', true )
    ];
  }

  toggleCar(car:Cars){
    car.hide = !car.hide;
  }
  addCars(txtName:string, txtManufacturer:string, txtPrice:string, txtYear:string){
    this.carsInfo.unshift(new Cars(txtName, txtManufacturer, parseInt(txtPrice), parseInt(txtYear), './assets/alto.jpg', false));
  }
  editCar(){
    
  }
  deleteCar(car:Cars){
    this.carsInfo.splice(this.carsInfo.indexOf(car), 1);
  }

}
