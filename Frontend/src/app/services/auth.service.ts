import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  authUser(user:any){
    let userArray = [];
    if(localStorage.getItem('Users')){
      userArray = JSON.parse(localStorage.getItem('Users') as any);
    }
    let u = userArray.find((p: {userName: any, password: any}) => p.userName === user.userName && p.password === user.password);
    console.log(JSON.stringify(u));
    return u;
    // return userArray.find((p: any) => p.userName === user.userName && p.password === user.password);
  }
}
