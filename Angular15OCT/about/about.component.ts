import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  desc:string;

  constructor() {
   this.desc=" Welcome,to amazon.com,we provide a huge and an amazing variety of products for you.";
   }


}
