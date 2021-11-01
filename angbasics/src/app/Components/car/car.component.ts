import { Component, Input, OnInit } from '@angular/core';
import { Cars } from 'src/app/Models/car.model';
import { CarService } from 'src/app/Services/car.service';

@Component({
  selector: 'car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  @Input() compTitle:string = '';
  ShowDialog:boolean = false;

  carsInfo = [];    
  newCarInfo:Cars;

  constructor( public DataService:CarService) { }

  ngOnInit(): void {
    this.carsInfo = this.DataService.carsInfo;
  }

  showHide(car:Cars){
    this.DataService.toggleCar(car);
  }
  
  showAddCarDialog(){
    this.ShowDialog = true;
    for(let i=0; i<this.carsInfo.length; i++){
      this.carsInfo[i].editmode = false;
    }
  }
  dialogClosed(){
    this.ShowDialog = false;
  }

  addCar(txtName:string, txtManufacturer:string, txtPrice:string, txtYear:string) {
    this.DataService.addCars(txtName, txtManufacturer, txtPrice, txtYear);
    this.ShowDialog = false;
  }

  editCar(car:Cars){
    car.editmode = true;
  }

  saveCar(car:Cars){
    this.DataService.editCar(car);
  }
  
  deleteCar(car:Cars){
   this.DataService.deleteCar(car);  
  }
}
