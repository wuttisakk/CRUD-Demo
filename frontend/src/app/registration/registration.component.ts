import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private _service : RegistrationService, private _route: Router) { }

  ngOnInit(): void {
  }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    timer: 3000,
    showConfirmButton: false,
  })

  public registerUser() {
    this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        this.Toast.fire('Create Account Success', '', 'success')
        console.log("Registration Success")
      },
      error => {
        this.Toast.fire('Email is already exist!', '', 'error')
        console.log("User or Email is already exist")
      }
    )
  }

}
