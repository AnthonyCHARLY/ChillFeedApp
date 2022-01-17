import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
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

  myIngredientsId: string[];
  myIngredients: any[];
  myIngredientsNames: any[];
  mySearchedIngredients: any[];

  ingredientData = {
    _id: '',
    name: '',
    protein: 0,
    lipid: 0,
    carbs: 0,
    kcal: 0,
    unit: '',
    quantity: 0
  }

  ingredientQty = 0;

  recipeName = '';
  receipIngredientList: any[];

  recipeData = {
    protein: 0,
    lipid: 0,
    carbs: 0,
    kcal: 0
  }

  constructor(private router: Router, private ingredientService: IngredientService, private apifood: ApiService, private receipService: ReceipService, private fb: FormBuilder) {
    this.myIngredientsId = [];
    this.myIngredients = []
    this.myIngredientsNames = [];
    this.mySearchedIngredients = [];
    this.receipIngredientList = [];
  }

  ngOnInit(): void {

    this.ingredientService.getAllUserIngredients(this).then(
      () => {
        this.myIngredients = [];
        this.myIngredientsId.forEach(id => {
          this.ingredientService.getIngredientById(id, this).then(
            response => {
              this.mySearchedIngredients.push(response);
              this.myIngredientsNames.push(response);
            }
          );
        });
      }
    );
  }

  onChangeMyIngredients(event: MatSelectionListChange) {

    let index = this.myIngredientsNames.indexOf(event.option.value);
    console.log(this.myIngredients[index]);
    
    this.ingredientData._id = this.myIngredients[index]._id;
    this.ingredientData.name = this.myIngredients[index].name;
    this.ingredientData.protein = this.myIngredients[index].protein;
    this.ingredientData.lipid = this.myIngredients[index].lipid;
    this.ingredientData.carbs = this.myIngredients[index].carbs;
    this.ingredientData.kcal= this.myIngredients[index].kcal;
    this.ingredientData.unit = this.myIngredients[index].unit;
    this.ingredientData.quantity = this.myIngredients[index].quantity;
    
    //this.ingredientData._id = this.myIngredients[index]
  }

  onKeySeaerchedIngredients(event: any) {
    this.filterData(event.target.value);
  }

  onKeyQty(event: any){
    this.ingredientQty = event.target.value;
  }

  onKeyRecipeName(event: any){
    this.recipeName = event.target.value;
  }

  onRecipeName(event: any){

  }

  onAdd() {
    if(this.ingredientQty > 0){
      let qty = this.ingredientQty;
      let ing = JSON.parse(JSON.stringify(this.ingredientData));
      this.receipIngredientList.push(
        {
          qty: qty,
          ingredient: ing
        }
      );      
      this.recipeData.protein += this.ingredientData.protein*this.ingredientQty;
      this.recipeData.kcal += this.ingredientData.kcal*this.ingredientQty;
      this.recipeData.lipid += this.ingredientData.lipid*this.ingredientQty;
      this.recipeData.carbs += this.ingredientData.carbs*this.ingredientQty;
      
    }
    else{
      console.log('unvalid quantity');
      
    }
  }

  onCreate() {

    let newRecipe = {
      name: this.recipeName,
      ingredients: this.receipIngredientList,
      protein: this.recipeData.protein,
      lipid: this.recipeData.lipid,
      carbs: this.recipeData.carbs,
      kcal: this.recipeData.kcal,
    }
    
    this.receipService.addReceip(newRecipe).then(() => this.router.navigate(['/recipes']));

  }

  filterData(entry: string) {

    this.mySearchedIngredients = [];

    this.myIngredientsNames.forEach(ing => {

      let lowEntry = entry.toLowerCase();
      let lowIng = ing.substring(0, entry.length).toLowerCase();

      if (lowEntry === lowIng) {
        this.mySearchedIngredients.push(ing);
      }

    });
  }

}




