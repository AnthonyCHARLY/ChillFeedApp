import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { IngredientService } from 'app/services/ingredient.service';
import { ReceipService } from 'app/services/receip.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register-receipts',
  templateUrl: './register-receipts.component.html',
  styleUrls: ['./register-receipts.component.scss']
})
export class RegisterReceiptsComponent implements OnInit {
  submitSearch:boolean;
  search: string;


  options = ["banan", "chocolate", "apple"];

  
   
  ingredientData = {
    _id :'',
    name      : '',
    protein   : 0,
    lipid     : 0,
    carbs     : 0,
    kcal      : 0,
  } 

  ingredientList = [];

  filteredOptions;

  formGroup : FormGroup;

  constructor(private router : Router , private ingredientService : IngredientService , private apifood: ApiService , private receipService : ReceipService ,private fb : FormBuilder) { 
    this.submitSearch = false;
  }

  ngOnInit(): void {
    this.initForm();
    this.getNames();
  }
  
  onSearch(form: NgForm) {
    this.search = form.value.name;

    this.ingredientService.FindIngredientByName(this.ingredientData,this.search).then(()=>this.submitSearch = true);

   
  }
  onAdd(){
    this.ingredientList.push({...this.ingredientData});
  }
  onCreate(form: NgForm){
    
    let sum = {
      protein : 0 ,
      lipid : 0 ,
      carbs : 0 ,
      kcal : 0 
    }

   this.ingredientList.forEach(
     a =>(
     sum.protein += a.protein,
     sum.carbs += a.carbs,
     sum.lipid += a.lipid,
     sum.kcal += a.kcal
      )
    )
    let receipData = {
      name : form.value.name,
      ingredients : this.ingredientList, 
      protein : sum.protein,
      lipid : sum.lipid,
      carbs : sum.carbs,
      kcal : sum.kcal,
    }
    this.receipService.addReceip(receipData).then(()=> this.router.navigate(['/recipes']) );
    
  }

  //autocomplete
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
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
    this.ingredientService.getAllIngredientsName(this);
  }
  onRemoveIngredient(ingredient){  
            this.ingredientList.forEach((element,index)=>{
              if(element._id==ingredient._id){
                console.log(element);           
                this.ingredientList.splice(index,1);
              }
           });
           
  }



}
