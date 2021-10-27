import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShopComponent } from './Components/shop/shop.component';
import { MessageComponent } from './message.component';
import { CarComponent } from './Components/car/car.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './Components/user/user.component';
import { BorderChangeDirective } from './Directive/border-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ShopComponent,
    CarComponent,
    ContactComponent,
    UserComponent,
    BorderChangeDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
