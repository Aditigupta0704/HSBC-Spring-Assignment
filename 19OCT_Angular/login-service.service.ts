import { Injectable } from '@angular/core';
import { userArr, user } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  getUser():user[]{
   
    return userArr ;
  }
}
