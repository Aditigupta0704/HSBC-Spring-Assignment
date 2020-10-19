import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Console } from 'console';
import { user } from '../Login';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formUser:user; //from form input
  userArr=[]; //from service
  constructor(user1:LoginServiceService) {
    this.userArr=user1.getUser(); 
   
   }

  ngOnInit(): void {
  }
  onsubmit(ngform:NgForm)
  {

    this.formUser=ngform.value;

    // console.log("Array name"+this.userArr[0].name);
    // console.log("Array pass"+this.userArr[0].password);
    // console.log("form name"+this.formUser.name);
    // console.log("form pass"+this.formUser.password);
     var b:Boolean=false;
     for(var i=0;i<this.userArr.length;i++)
      {
         if(this.userArr[i].name==this.formUser.name && this.userArr[i].password==this.formUser.password)
           b=true;
     }
     if(b)
     console.log("valid");
     else
     console.log("Invalid");
  
  }
  
}
