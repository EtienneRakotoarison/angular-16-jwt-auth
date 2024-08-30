import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { User } from '../models/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogged?: User;
  form: any = {
    username: 'etienne@instapic.com',
    password: 'password'
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService, private userService: UserService, private http: HttpClient) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.userService.getConnectedUserInfo(username, password).subscribe({
          next: (data) => {
            this.storageService.saveUser(data);
          },
          error: (err) => {
            console.error('Erreur lors de la récupération des informations utilisateur', err);
          }
        });
        

        this.isLoginFailed = false;
        this.errorMessage = '';
        // this.isLoggedIn = true;
        // this.roles = this.storageService.getUser().roles;
        console.log(this.storageService.getUser());
        // console.log(this.roles);
        // this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
