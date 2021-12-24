import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'app/services/customer.service';


@Component({
  selector: 'app-register-customers',
  templateUrl: './register-customers.component.html',
  styleUrls: ['./register-customers.component.scss']
})
export class RegisterCustomersComponent implements OnInit {

  customerData = {
    name     : "",
    email    : "",
    age      : 0, 
    weight   : 0, 
    height    : 0, 
    morphology: "", 
    activity  : "",
    goal      : "",
    weightGoal: 0
}

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.customerData.email = form.value.email;
    this.customerData.name = form.value.name;
    this.customerData.age = form.value.age;
    this.customerData.weight = form.value.weight;
    this.customerData.height = form.value.height;
    this.customerData.morphology = form.value.morphology;
    this.customerData.activity = form.value.activity;
    this.customerData.goal = form.value.goal;
    this.customerData.weightGoal = form.value.weightGoal;
   

    this.customerService.addCustomer(this.customerData);
  }

}
