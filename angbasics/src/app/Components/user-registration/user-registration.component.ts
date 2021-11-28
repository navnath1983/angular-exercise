import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/Models/users';
import { UserDataService } from 'src/app/Services/user-data.service';

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  users:Users;
  currentUser:Users;

  constructor(private usersData: UserDataService) { }

  ngOnInit(): void {
    this.getUserData()
  }

  getUserData(){
    this.usersData.getUserData().subscribe( res => {
      this.users = res;
      // console.log(this.users);
      this.currentUser = this.users[0];
      // console.log(this.currentUser);
    })
  }

  sendUserData(){
    this.usersData.sendUserData().subscribe( res => {
      this.users = res;
      console.log(this.users);
    })
  }

  delUserData(){
    this.currentUser = this.users[0];
    console.log(this.currentUser);
  }
}
