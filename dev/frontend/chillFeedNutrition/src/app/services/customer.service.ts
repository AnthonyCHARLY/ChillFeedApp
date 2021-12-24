import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
    constructor( private httpClient : HttpClient){
    }

    addCustomer(customerData : object ){
        return new Promise((resolve, rejected) => {
            this.httpClient.post('http://localhost:5000/api/users/61c4461703cde22d5bdd71bd/addCustomer', customerData)
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