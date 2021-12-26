import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private currentCustomerId: string;

  private currentCustomer: any;
  public currentCustomerSubject: Subject<any>;


  constructor(private httpClient: HttpClient, private authService: AuthService) {
    this.currentCustomerSubject = new Subject<any>();
  }

  addCustomer(customerData: object) {
    return new Promise((resolve, rejected) => {
      let currentUserId = this.authService.getCurentUserId();
      console.log(currentUserId);

      this.httpClient.post('http://localhost:5000/api/users/' + currentUserId + '/addCustomer', customerData)
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

  updateCurrentCustomer(customerId: string) {
    this.httpClient.get('http://localhost:5000/api/customers/findById/' + customerId)
      .subscribe(
        (data: any) => {
          this.currentCustomer = data.data;
          this.currentCustomerSubject.next(this.currentCustomer);
        },
        error => {
          console.log(error);
        }
      );
  }

  getUserCustomers(userId: string, fen: any) {
    return new Promise((resolve, rejected) => {
      this.httpClient.get('http://localhost:5000/api/users/getCustomers/' + userId)
        .subscribe(
          (data: any) => {
            fen.customersId = data.data;
            resolve(true);
          },
          error => {
            console.log(error);
            rejected(true);
          }
        );
    });
  }

  getCustomer(customerId: string, fen: any) {
    this.httpClient.get('http://localhost:5000/api/customers/findById/' + customerId)
      .subscribe(
        (data: any) => {
          fen.customers.push(data.data);
        },
        error => {
          console.log(error);
        }
      );
  }

}