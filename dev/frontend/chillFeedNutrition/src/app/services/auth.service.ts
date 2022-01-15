import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router,CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate{

  private currentUserId: string;

  private isLoged: boolean;
  public isLogedSubject: Subject<boolean>;


  constructor(private router: Router,private httpClient: HttpClient) {
    this.isLoged = false;
    this.isLogedSubject = new Subject<boolean>();
  }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    if (!this.isLoged)  {
      
      alert('You are not connected');
      this.router.navigate(['log-in']);
      return false;
    } 
    return true;
  }


  logOut() {
    this.isLoged = false;
    this.isLogedSubject.next(this.isLoged);
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
            /*
            this.isLoged = true;
            this.isLogedSubject.next(this.isLoged); 
            */
            resolve(true);
          },
          error => {
            console.log(error);

          }
        );

    })
  }

  getCurentUserId() {
    return this.currentUserId;
  }
}