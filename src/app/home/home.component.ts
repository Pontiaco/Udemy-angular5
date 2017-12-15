import { AuthService } from '../auth-service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    // complex calc....
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowedit: 1}, fragment: 'loading' })

  }
  onLogin() {
    this.authService.logIn()
  }

  onLogout() {
    this.authService.logOut()
  }


}
