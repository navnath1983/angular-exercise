import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './Components/shop/shop.component';
import { MessageComponent } from './Components/message.component';
import { CarComponent } from './Components/car/car.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { BorderChangeDirective } from './Directive/border-change.directive';
import { BlinkDirective } from './Directive/blink.directive';
import { DialogBoxComponent } from './@Shared/dialog-box/dialog-box.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoComponent } from './Components/to-do/to-do.component'

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ShopComponent,
    CarComponent,
    ContactComponent,
    UserComponent,
    BorderChangeDirective,
    BlinkDirective,
    DialogBoxComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
