import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:string;
  num:string;
  constructor() { 

this.contact="wwww.amazon.com"
this.num="9382924535"
  }

  ngOnInit() {
  }

}
