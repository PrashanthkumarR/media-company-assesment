import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userDB = [
    {
      "userId": "abc@media.com", password: "abc123", username: 'tom'
    },
    {
      "userId": "def@media.com", password: "def123", username: 'dick'
    }
  ]
  userInfo: any;
  private isLogedInSource$ = new BehaviorSubject<boolean>(false);
  isLogedIn$ = this.isLogedInSource$.asObservable();

  constructor(private router: Router,
    private _snackBar: MatSnackBar) { }

  isLoggedIn() {
    let userData: any = localStorage.getItem('userInfo');
    if (userData) {
      this.userInfo = JSON.parse(userData);
      this.isLogedInSource$.next(true)
      return this.userInfo['exp'] > Date.now() / 1000;
    } else {
      this.isLogedInSource$.next(false);
      return false;
    }

  }

  login(formValue: any) {
    let user: any = this.userDB.find((el) => {
      return el['userId'] === formValue['username'];
    })
    if (user && user['password'] === formValue['password']) {
      let dt = new Date();
      user['exp'] = dt.setHours(dt.getHours() + 4);
      delete user['password'];
      localStorage.setItem('userInfo', JSON.stringify(user));
      this.isLogedInSource$.next(true)
      this.router.navigateByUrl('/home')
    } else {
      this.isLogedInSource$.next(false)
      this._snackBar.open('UserID or Password is invalid, Please try with valid credentials', 'ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'top',
          duration: 3 * 1000,
        });
    }
  }

  logOut() {
    localStorage.clear();
    this.isLogedInSource$.next(false);
    this.router.navigateByUrl('/home')
  }

}
