import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Two Way Binding';
  name:any;

  // <!-- template reference varible -->
  title1='Template Reference Variable';
  getVal(item:HTMLInputElement)
  {
    console.warn(item)
  }
}
