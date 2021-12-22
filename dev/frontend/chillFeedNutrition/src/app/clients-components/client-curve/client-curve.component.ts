import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-client-curve',
  templateUrl: './client-curve.component.html',
  styleUrls: ['./client-curve.component.scss']
})
export class ClientCurveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dataDailySalesChart: any = {
      labels: ['Week ', 'Week', 'Week', 'Week', 'Week', 'Week', 'Week'],
      series: [
          [12, 17, 7, 17, 23, 18, 38]
      ]
  };

 const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
          tension: 0
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
  }

  var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);

  }

}
