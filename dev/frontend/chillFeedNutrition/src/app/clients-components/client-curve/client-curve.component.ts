import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Chartist from 'chartist';
import { CustomerService } from 'app/services/customer.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-client-curve',
  templateUrl: './client-curve.component.html',
  styleUrls: ['./client-curve.component.scss']
})
export class ClientCurveComponent implements OnInit {

  dataDailySalesChart= {
    labels: [],
    series: [ 
        [] ]
    
  };
 // dataDailySalesChart : any;
  evolutionWeight : any;
  curveObjectif : boolean;
  lastWeight : any;
  newWeight : any;
  valueWeight : number ;


  currentClient: any;
  currentClientSubscription: Subscription;
 

  constructor(private customerServie: CustomerService) {
    this.currentClientSubscription = this.customerServie.currentCustomerSubject.subscribe(
      (customer: any) => {
        this.currentClient = customer;

        this.dataDailySalesChart.series[0]=[];
        this.dataDailySalesChart.labels = [];
        this.ngCurveEvoluation();
       
        let ElementCurve=0;
        let lenghtCurve =this.currentClient.weightCurve.length;
       

        this.currentClient.weightCurve.forEach(element => {

          this.dataDailySalesChart.series[0].push(element);
          if(ElementCurve<lenghtCurve)
            this.dataDailySalesChart.labels.push('Week');
            ElementCurve = ElementCurve +1;
           
        });

        this.ngCurveEvoluation();
    });
    

    this.curveObjectif = false;
        
    this.curveObjectif=true;
    this.valueWeight= 0;
        
   }
  

  
  ngOnInit(): void {
    
    this.ngCurveEvoluation();
  }

  onSubmit(form: NgForm){
    
    this.dataDailySalesChart.labels.push('Week');
   
    this.dataDailySalesChart.series[0].push(form.value.weight);
   
    this.lastWeight = this.dataDailySalesChart.series[0].slice(-1)[0];
    this.newWeight = this.dataDailySalesChart.series[0].slice(-2)[0];

    if(this.lastWeight> this.newWeight){
      
      this.curveObjectif = true;
      this.valueWeight= (this.lastWeight - this.newWeight);
    }
    else{
      this.curveObjectif = false;
      this.valueWeight= (this.newWeight - this.lastWeight);
    }

    
    this.ngOnInit();
  }


  ngCurveEvoluation(){
    
    const optionsDailySalesChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 45,
          high: 100, 
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', this.dataDailySalesChart, optionsDailySalesChart);

  }

  

  
   
    

}
