import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Basic of Pipes In Angular';
  today=Date();
  capString(item:string)
  {
    return item.toUpperCase();
  }
  user={
    name:"anil",
    age:22
  }
  title1='Make Custom Pipes';
}
