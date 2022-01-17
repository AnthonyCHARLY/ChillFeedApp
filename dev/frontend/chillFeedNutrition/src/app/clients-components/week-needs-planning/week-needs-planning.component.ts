import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { debounceTime } from 'rxjs/operators';
import { ReceipService } from 'app/services/receip.service';

@Component({
  selector: 'app-week-needs-planning',
  templateUrl: './week-needs-planning.component.html',
  styleUrls: ['./week-needs-planning.component.scss']
})
export class WeekNeedsPlanningComponent implements OnInit {

  

    websiteViewsChart : any;
    datawebsiteViewsChart = {
      labels: ['Lipids','Protein','Kcal'],
      series: [
        [2000,2000,2000]
  
      ]
    };
    optionswebsiteViewsChart = {
      axisX: {
          showGrid: false
      },
      low: 0,
      high: 3000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
  };
  responsiveOptions: any[] = [
    ['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function (value) {
          return value[0];
        }
      }
    }]
  ];


  receipNamesList = ["banan", "chocolate", "apple"];
  filteredOptions;

  formGroup : FormGroup;
  constructor(private recipeService : ReceipService,private router : Router  , private apifood: ApiService  ,private fb : FormBuilder) {
    
    
   }

  ngOnInit(): void {
    this.initForm();
    this.getNames();
    this.websiteViewsChart = new Chartist.Bar('#websiteViewsChart', this.datawebsiteViewsChart, this.optionswebsiteViewsChart, this.responsiveOptions);
  }
  changeSelection(item: any) {
    console.log(item.isChecked);
  }

  initForm(){
    this.formGroup = this.fb.group({
      'name' : ['']
    })
    this.formGroup.get('name').valueChanges
    .pipe(debounceTime(200))
    .subscribe(response => {
      if(response && response.length){
        this.filterData(response);
      } else {
        this.filteredOptions = [];
      }

    })
  }

  filterData(enteredData){
    this.filteredOptions = this.receipNamesList.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
     this.recipeService.getAllReceipsName(this).then((data)=> 
     {this.filteredOptions=data;});
      
     
  }
  onSubmit(form: NgForm){
    console.log("form dinner : " + form.value.dinner);
  }
  on(form: NgForm){
    console.log("form dinner : " + form.value.dinner);
  }
  onSub(form: NgForm){
    console.log("form dinner : " + form.value.dinner);
  }
  


}
