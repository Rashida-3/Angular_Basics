import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '1.Important Event in Angular';
  title1 = '2.get input box value ';
  title2 = '3.counter with angular ';
  count=0

  displayVal=''; //get input box value display


  getData(val:string)
  {
    console.warn(val)
  }

  getValue(val:string)
  {
    console.warn(val)
    this.displayVal=val
  }
// # couter

counter(type:string)
{
  type=== 'add' ?this.count++:this.count--;
}


}

