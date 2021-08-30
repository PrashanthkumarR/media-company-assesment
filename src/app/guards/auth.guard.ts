import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isLoggedIn()) {
      this._snackBar.open('Your session has timed out. Please login again', 'ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3 * 1000,
        });
      this.router.navigate(['/login']); // go to login if not authenticated
      return false;
    }
    return true;
  }

}
