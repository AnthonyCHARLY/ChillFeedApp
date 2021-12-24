import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  logAlert: boolean;

  private userData = {
    email : '',
    password : ''
  };

  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService) { 
    this.logAlert = false ;  
  }

  ngOnInit(): void {
    this.authService.logOut();
  }

  onSubmit(form: NgForm) {

    this.userData.email = form.value.email;
    this.userData.password = form.value.password;

    this.authService.logIn(this.userData).then(
      () => {
        this.router.navigate(['clients']);
      },
      () =>{
        this.logAlert = true;
      }
    )
  }

}
