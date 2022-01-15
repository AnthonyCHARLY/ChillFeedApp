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

        this.dataDailySalesChart.series[0].splice(0,this.currentClient.weightCurve.length);
        this.dataDailySalesChart.labels.splice(0,this.currentClient.weightCurve.length);
        this.ngCurveEvoluation();
        console.log(" après supression : " + this.dataDailySalesChart.series[0]);

        let ElementCurve=0;
        let lenghtCurve =this.currentClient.weightCurve.length;
        console.log(" taille tableau " +lenghtCurve);
        console.log(" taille tableau " + this.currentClient.weightCurve);

        this.currentClient.weightCurve.forEach(element => {

          console.log("cure icic ===>" + element);
          this.dataDailySalesChart.series[0].push(element);
          console.log("cure icic ===>" + this.dataDailySalesChart.series[0]);
          if(ElementCurve<lenghtCurve)
            this.dataDailySalesChart.labels.push('Week');
            
            ElementCurve = ElementCurve +1;
            console.log("cure icic ===>" + this.dataDailySalesChart.labels);
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
    console.log("lables "+ this.dataDailySalesChart.labels);
    this.dataDailySalesChart.series[0].push(form.value.weight);
    console.log("lables "+ this.dataDailySalesChart.series );
    this.lastWeight = this.dataDailySalesChart.series[0].slice(-1)[0];
    this.newWeight = this.dataDailySalesChart.series[0].slice(-2)[0];

    if(this.lastWeight> this.newWeight){
      console.log("trueee");
      this.curveObjectif = true;
      this.valueWeight= (this.lastWeight - this.newWeight);
    }
    else{
      console.log("false");
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
          high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', this.dataDailySalesChart, optionsDailySalesChart);

  }

  

  
   
    

}
