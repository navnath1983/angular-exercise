import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/Models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  contactModel = new Contact( 'Navnath','navanath.n9@gmail.com', '7888048983', 'Hi' );
 
  constructor() { }

  ngOnInit(): void {
  }
  
  addContact(){
    this.contactModel = new Contact( '','', '', '' );
  }

  onSubmit(formValues){
    console.log(formValues);
  }

  get data(){
    return JSON.stringify(this.contactModel);
  }
}
