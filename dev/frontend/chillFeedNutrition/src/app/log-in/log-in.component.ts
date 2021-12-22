import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {


  private userData = {
    email : '',
    password : ''
  };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {

    this.userData.email = form.value.email;
    this.userData.password = form.value.password;


    this.httpClient.post('http://localhost:5000/api/users/findOne', this.userData).
          subscribe(
            (rep:any) => { 
              console.log(rep); 
            }
          )
  }

}
