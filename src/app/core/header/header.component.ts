import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  userInfo: any;

  constructor(public authService: AuthService) {
    this.authService.isLogedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    })
    let userData: any = localStorage.getItem('userInfo');
    this.userInfo = JSON.parse(userData);
  }


  ngOnInit(): void {
  }



  logOut() {
    this.authService.logOut()
  }

}
