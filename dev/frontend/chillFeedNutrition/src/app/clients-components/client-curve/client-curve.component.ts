import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as Chartist from 'chartist';


@Component({
  selector: 'app-client-curve',
  templateUrl: './client-curve.component.html',
  styleUrls: ['./client-curve.component.scss']
})
export class ClientCurveComponent implements OnInit {

  dataDailySalesChart : any;
  evolutionWeight : any;
  curveObjectif : boolean;
  lastWeight : any;
  newWeight : any;
  valueWeight : number ;

  constructor() {
         this.curveObjectif = false;
        this.dataDailySalesChart= {
          labels: ['Week ', 'Week', 'Week'],
          series: [ 
              [12, 17, 7] ]
          
        };
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
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
      }

      var dailySalesChart = new Chartist.Line('#dailySalesChart', this.dataDailySalesChart, optionsDailySalesChart);

  }

  

  
   
    

}
