import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData = {
      email    : "",
      password : "",
      
  }

  constructor(private router : Router,private authService : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    this.userData.email = form.value.email;
    this.userData.password = form.value.password;

    this.authService.signIn(this.userData).then(
      () => {
        this.router.navigate(['log-in']);
      },
      () =>{

      }
    )
  }
}
