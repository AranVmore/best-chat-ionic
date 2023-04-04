import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { authService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggedinGuard implements CanActivate, CanLoad {

  constructor(private authComprove: authService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authComprove.isLoggedIn == true) {
        //window.alert('Access denied!');
        this.router.navigate(['chat']);
      }
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this.authComprove.isLoggedIn == true) {
        //window.alert('Access denied!');
        this.router.navigate(['chat']);
      }
    return true;
  }
}
