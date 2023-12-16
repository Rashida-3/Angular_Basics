import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './user-auth/sign-in/sign-in.component';
import { StyleListComponent } from './style-list/style-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CountryListComponent } from './country-list/country-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SignInComponent,
    StyleListComponent,
    StudentListComponent,
    CountryListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
