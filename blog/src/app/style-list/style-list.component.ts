import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-list',
  templateUrl: './style-list.component.html',
  styles: [
    `.custom{color:red}`
  ]
})
export class StyleListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
