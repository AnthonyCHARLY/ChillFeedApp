import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})

export class ReceipService {

    constructor( private httpClient : HttpClient, private authService : AuthService){}

    addReceip(receipData : object ){

        return new Promise((resolve, rejected) => {
            let currentUserId = this.authService.getCurentUserId();
           
            this.httpClient.post('http://localhost:5000/api/users/'+currentUserId+'/addReceip', receipData)
              .subscribe(
                (data: any) => {
                  console.log(data);     
                  resolve(true);
                },
                error => {
                  rejected(true);
                  console.log(error);
      
                }
              );
          })

    }

}