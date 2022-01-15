import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'app/services/customer.service';
import { Router } from '@angular/router';

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
    sexe      : "",
    weightCurve: [],
    dateCurve: [],
    weightGoal: 0
  }
  morphotype : String[];
  activitys : String [];
  sexe : String [];

  


  constructor(private router: Router,private customerService : CustomerService) {
    
   }

  ngOnInit(): void {
    this.morphotype = ['Endomorphic', 'Mesomorphic','Ectomorph'];
    this.activitys = ['Base','Leisur','Reinforcement','Endurance','Strength','Marathon','Hight Level'];
    this.sexe = ['girl','boy'];
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
    
    this.customerData.weightCurve.push(form.value.weight);
    console.log("tableau de poids " + this.customerData.weightCurve);

    
    this.customerData.sexe = form.value.sexe;

    this.customerService.addCustomer(this.customerData);
    console.log(form.value.sexe + "  sexe");
    
    this.router.navigate(['clients']);
  }

}
