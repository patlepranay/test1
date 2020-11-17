import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;

  constructor(public authService: AuthService) { }
  
  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService
      .getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return
    }
    this.isLoading = true;
    this.authService.login(form.value.email, form.value.password);
  }


}
