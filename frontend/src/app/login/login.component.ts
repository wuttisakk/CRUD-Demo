import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  users: string;

  constructor(private _service: RegistrationService, private _route: Router) { }

  ngOnInit(): void {
    this.users = this.isUserLoggedIn('User');
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    showConfirmButton: false,
  })

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        this.Toast.fire('Login Success', '', 'success')
        console.log("Login Success")
        this._route.navigate(['/employee'])
        localStorage.setItem('User', "user")
      },
      error => {
        this.Toast.fire('Wrong username or password!', '', 'error')
        console.log("Wrong username or password")
      }
    )
  }

  isUserLoggedIn(User: string): string {
    User = localStorage.getItem(User);
    if (User !== null) {
      this._route.navigate(['/employee'])
    }
    return User;
}

}
