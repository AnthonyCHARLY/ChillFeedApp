import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { CustomerService } from 'app/services/customer.service';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  customers: any[];

  customersId :string[];

  constructor(private authService: AuthService, private customerService: CustomerService ) {
    this.customers = [];     
  }

  ngOnInit(): void {   
    this.customerService.getUserCustomers(this.authService.getCurentUserId(),this).then(() => {
      this.customersId.forEach(customerId => {
        this.customerService.getCustomer(customerId,this);
      });
      this.customerService.updateCurrentCustomer(this.customersId[0]);
      
    });
  }

  onChange(value){
    this.customerService.updateCurrentCustomer(value);
  }


}
