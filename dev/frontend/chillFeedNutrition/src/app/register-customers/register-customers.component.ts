import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-customers',
  templateUrl: './register-customers.component.html',
  styleUrls: ['./register-customers.component.scss']
})
export class RegisterCustomersComponent implements OnInit {

  userData = {
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

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.userData.email = form.value.email;
    this.userData.name = form.value.name;
    this.userData.age = form.value.age;
    this.userData.weight = form.value.weight;
    this.userData.morphology = form.value.morphology;
    this.userData.activity = form.value.activity;
    this.userData.goal = form.value.goal;
    this.userData.weightGoal = form.value.weightGoal;
   
  }

}
