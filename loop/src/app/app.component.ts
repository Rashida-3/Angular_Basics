import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loop';
  users=['Anil','Bhasker','Sam','Peter','Burce'];
  userDetails=[
    {name:"Anil",email:"anil@test.com", phone:"8898"},
    {name:"Bhasker",email:"bhasker@test.com", phone:"1234"},
    {name:"Sam",email:"san@test.com", phone:"4456"},
    {name:"Peter",email:"peter@test.com", phone:"7689"},
    {name:"Burce",email:"burce@test.com", phone:"2232"},

  ];

  // nested loop
  title1='Nested For Loop';
  user1=[
    {name1:'Anam',phone:'1111',socialAccounts:['facebook','insta','gmail']},
    {name1:'heena',phone:'2222',socialAccounts:['yootube','insta','yahoo']},
    {name1:'Shweta',phone:'3333',socialAccounts:['whatsapp','insta','gmail']},
    {name1:'zobia',phone:'4444',socialAccounts:['linked','yahoo','insta']},
    {name1:'Rashida',phone:'5555',socialAccounts:['twitter','insta','gmail']},

  ];

  // <!-- Style Binding -->
  title2='Style Binding';
  color='red';
  bgColor='green';

  updateColor(){
    this.color='blue'
    this.bgColor='red'
  }
}
