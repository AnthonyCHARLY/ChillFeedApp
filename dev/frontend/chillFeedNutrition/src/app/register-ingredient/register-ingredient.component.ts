import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientService } from 'app/services/ingredient.service';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-register-ingredient',
  templateUrl: './register-ingredient.component.html',
  styleUrls: ['./register-ingredient.component.scss']
})
export class RegisterIngredientComponent implements OnInit {
  submitSearch:boolean;
  search: string;

  ingredientData = {
    name      : '',
    protein   : 0,
    lipid     : 0,
    carbs     : 0,
    kcal      : 0,
  }

  constructor(private ingredientService : IngredientService , private apifood: ApiService) { 
    this.submitSearch = false;
  }

  ngOnInit(): void {
  }
  onCreate(form: NgForm) {
    this.ingredientData.name = form.value.name;
    this.ingredientData.protein = form.value.protein;
    this.ingredientData.lipid = form.value.lipid;
    this.ingredientData.kcal = form.value.kcal;
    this.ingredientData.carbs = form.value.carbs;

    this.ingredientService.addIngredient(this.ingredientData);


    
   
  }
  onSearch(form: NgForm) {
    this.search = form.value.name;
    this.apifood.getData(this.search,this.ingredientData).then(()=>{
      console.log('ouiii')
    });
    this.submitSearch = true;
   
  }
  onSave(){
    this.ingredientService.addIngredient(this.ingredientData);
  }

}
