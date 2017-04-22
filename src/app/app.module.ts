import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {userForm} from './app.userForm';
import {userService} from './app.userService'

@NgModule({
  declarations: [
    AppComponent,
    userForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [userService],
  bootstrap: [AppComponent]
})
export class AppModule { }
