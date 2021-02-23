import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user_id') !== null && localStorage.getItem('user_id') !== 'null') { // determine if the uder is logged in from this method.
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
