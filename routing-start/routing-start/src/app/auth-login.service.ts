import { Injectable } from "@angular/core";


@Injectable()
export class AuthLoginService{
    loggedIn = false;

    authenticate(){
       const pr = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.loggedIn);
            },1000);
       });
       return pr;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}