import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserClass } from '../../Models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor() { }

  user: FormGroup;
  userInfo: UserClass;  

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email] ),
        phone: new FormControl('', [Validators.required])
      })
    })
  }

  onSubmit(){
   this.userInfo = this.user.value;
   console.log(this.userInfo);
  }

}
