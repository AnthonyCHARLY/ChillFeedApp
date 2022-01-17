import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'app/services/customer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-needs',
  templateUrl: './client-needs.component.html',
  styleUrls: ['./client-needs.component.scss']
})
export class ClientNeedsComponent implements OnInit {

  currentClient = {
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
    weightGoal: 0
  }
  currentClientSubscription: Subscription;

  private sexIndices = {
    girl: 2100,
    boy: 2550
  }

  private projectsIndices = {
    default: 0,
    weightloss: -250,
    weightlossMore: -500,
    weightGain: +250,
    weightGainMore: +500
  }

  private morphoIndices = [
    {
      morph: "Ectomorphic",
      prot: 40,
      lip: 35,
      carb: 25
    },
    {
      morph: "Mesomorphic",
      prot: 35,
      lip: 32,
      carb: 33
    },
    {
      morph: "Endomorphic",
      prot: 35,
      lip: 32,
      carb: 33
    }
  ]


  private activitysIndices = [
    {
      act: "Base",
      prot: 20,
      lip: 30,
      carb: 50,
      kcal: 1
    },
    {
      act: "Leisur",
      prot: 20,
      lip: 25,
      carb: 55,
      kcal: 1.1
    },
    {
      act: "Reinforcement",
      prot: 25,
      lip: 20,
      carb: 55,
      kcal: 1.3
    },
    {
      act: "Endurance",
      prot: 15,
      lip: 20,
      carb: 60,
      kcal: 1.4
    },
    {
      act: "Strength",
      prot: 25,
      lip: 20,
      carb: 55,
      kcal: 1.4
    },
    {
      act: "Marathon",
      prot: 15,
      lip: 15,
      carb: 70,
      kcal: 1.5
    },
    {
      act: "Hight Level",
      prot: 20,
      lip: 20,
      carb: 60,
      kcal: 1.5
    }
  ]

  kcalNeeds: number;
  protNeeds: number;
  carbNeeds: number;
  lipNeeds: number;
  BMI: number;
  BMIStat: string;

  constructor(private customerService: CustomerService) {

    this.currentClientSubscription = this.customerService.currentCustomerSubject.subscribe(
      (customer: any) => {
        this.currentClient = customer;

        if (customer.sex === 'girl') {
          this.kcalNeeds = 2100;
        }
        else {
          this.kcalNeeds = 2550;
        }

        this.activitysIndices.forEach(activity => {
          if(customer.activity === activity.act){
            this.kcalNeeds = this.kcalNeeds*activity.kcal;

            this.morphoIndices.forEach(morph => {
              if(customer.morphology === morph.morph){
                this.protNeeds = ((activity.prot + morph.prot)/800)*this.kcalNeeds;
                this.lipNeeds = ((activity.lip + morph.lip)/1800)*this.kcalNeeds;
                this.carbNeeds = (this.kcalNeeds - this.protNeeds*4 - this.lipNeeds*9)/4;
              }
            });

          }
        });

        this.BMI = customer.weight / ((customer.height / 100) ^ 2)

        if (this.BMI <= 18.5) { this.BMIStat = "Underweight"; }
        if (this.BMI > 18.5 && this.BMI < 25) { this.BMIStat = "Normal weight" }
        if (this.BMI > 25 && this.BMI < 30) { this.BMIStat = "Overweight" }
        if (this.BMI > 30 && this.BMI < 35) { this.BMIStat = "Moderate obesity" }
        if (this.BMI > 35 && this.BMI < 40) { this.BMIStat = "Severe obesity" }
        if (this.BMI > 40) { this.BMIStat = "Morbidly obesity" }

      }
    )
  }

  ngOnInit(): void {

  }

}
