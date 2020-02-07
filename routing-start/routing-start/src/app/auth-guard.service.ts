import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { AuthLoginService } from './auth-login.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private authSer: AuthLoginService, private route: Router){}
    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.authSer.authenticate().then(
            (authenticated: boolean) => {
                if(authenticated)
                    return true;
                else{
                  
                    this.route.navigate(['/']);
                    console.log('complete');
                }
                    
            }
        );
    };
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }
}