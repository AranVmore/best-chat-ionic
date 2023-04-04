import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authComprove: authService, private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.authComprove.isLoggedIn !== true) {
        //window.alert('Access Denied, Login is Required to Access This Page!');
        this.router.navigate(['/']);
        //return true;
    }
      
    //alert('Haz loggin para iniciar sesión');
    //this.router.navigate(['/']);
    return true;
      
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authComprove.isLoggedIn !== true) {
        //window.alert('Access Denied, Login is Required to Access This Page!');
        this.router.navigate(['/']);
        //return true;
    }
      
    //alert('¡Eeeeejem! Te falta logearte');
    //this.router.navigate(['/']);
    return true;
  }
}
