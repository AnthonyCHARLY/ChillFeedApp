import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private currentUserId: string;

  private isLoged: boolean;
  public isLogedSubject: Subject<boolean>;


  constructor(private httpClient: HttpClient) {
    this.isLoged = false;
    this.isLogedSubject = new Subject<boolean>();
  }



  logIn(userData: object) {
    return new Promise((resolve, rejected) => {
      this.httpClient.post('http://localhost:5000/api/users/log-in', userData)
        .subscribe(
          (data: any) => {
            this.currentUserId = data.msg._id;
            this.isLoged = true;

            this.isLogedSubject.next(this.isLoged);
            resolve(true);
          },
          error => {
            rejected(true);
            console.log(error);

          }
        );
    })
  }

  signIn(userData: object) {
    return new Promise((resolve, rejected) => {
      this.httpClient.post(' http://localhost:5000/api/users/addOne', userData)
        .subscribe(
          (data: any) => {
            this.isLoged = true;
            this.isLogedSubject.next(this.isLoged);            
            resolve(true);
          },
          error => {
            console.log(error);

          }
        );

    })
  }

  getCurentUserId(){
    return this.currentUserId;
  }
}