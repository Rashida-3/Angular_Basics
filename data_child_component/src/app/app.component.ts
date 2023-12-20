import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pass Data Child Component';
  data=10;
  updateChild()
  {
    this.data=Math.floor(Math.random()*10)
  }
  title1 = 'Reusable Component';
  userDetails=[
    {name:'Anam mansuri',email:'anam@test.com'},
    {name:'heena shaikh',email:'heena@test.com'},
    {name:'Rashida Ansari',email:'rashida@test.com'},
    {name:'Huda khan',email:'huda@test.com'},

  ]
  title2 = 'Send Data Child to Parent Component';
  data1="x";
  updateData(item:string)
  {

    console.warn(item)
    this.data1=item;
  }

}
