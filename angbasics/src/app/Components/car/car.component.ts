import { Component, OnInit } from '@angular/core';
import { Cars } from 'src/app/Models/car.model';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  carsInfo = [];    

  constructor( public DataService:CarService) { }

  ngOnInit(): void {
    this.carsInfo = this.DataService.carsInfo;
  }

  showHide(car:Cars){
    this.DataService.toggleCar(car);
  }
  
  addCar(txtName:string, txtManufacturer:string, txtPrice:string, txtYear:string) {
    this.DataService.addCars(txtName, txtManufacturer, txtPrice, txtYear);
  }

  editCar(car:Cars){

  }

  deleteCar(car:Cars){
   this.DataService.deleteCar(car);  
  }
}
