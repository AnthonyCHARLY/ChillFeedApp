import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
    constructor( private httpClient : HttpClient, private authService : AuthService){
    }

    addCustomer(customerData : object ){

        return new Promise((resolve, rejected) => {
            let currentUserId = this.authService.getCurentUserId();
            console.log(currentUserId);
            
            this.httpClient.post('http://localhost:5000/api/users/'+currentUserId+'/addCustomer', customerData)
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