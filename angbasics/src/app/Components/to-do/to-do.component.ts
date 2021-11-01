import { Component, OnInit } from '@angular/core';
import { UserInformationService } from 'src/app/Services/user-information.service';

@Component({
  selector: 'to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  userData = [];

  constructor(private userService:UserInformationService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    this.userService.getToDo().subscribe(
      res => {
        this.userData = res;
        console.log(this.userData);
      }
    )
  }

}
