import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template Driven Forms Validation';
  userLogin(item:any)
  {
    console.warn(item);
  }
  title1='Reactive Form in Angular';
  loginForm=new FormGroup({
    user:new FormControl('rashida'),
    password:new FormControl('123')

  
  })
  loginUser()
  {console.warn(this.loginForm.value);

  }

}
