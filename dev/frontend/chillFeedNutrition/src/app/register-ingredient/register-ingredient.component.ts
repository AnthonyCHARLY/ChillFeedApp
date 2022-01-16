import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientService } from 'app/services/ingredient.service';
import { ApiService } from 'app/services/api.service';
//autocomplete
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-register-ingredient',
  templateUrl: './register-ingredient.component.html',
  styleUrls: ['./register-ingredient.component.scss']
})
export class RegisterIngredientComponent implements OnInit {
  submitSearch: boolean;
  search: string;

  ingredientData = {
    name: '',
    protein: 0,
    lipid: 0,
    carbs: 0,
    kcal: 0,
    unit: '',
    quantity: 0

  }


  searchedIngredients: any[];
  myIngredients: any[];

  constructor(private ingredientService: IngredientService, private apifood: ApiService, private fb: FormBuilder) {
    this.searchedIngredients = [];
    this.myIngredients = [];
  }

  ngOnInit(): void {    
    this.ingredientService.getAllUserIngredients(this);
  }

  onKeySeaerchedIngredients(event: any) {
    let val = event.target.value;
    this.apifood.getData(val, this);
  }

  onChangeSearchedIngredient(value: MatSelectionListChange) {
    this.ingredientData.name = this.searchedIngredients[value.option.value].name;
    this.ingredientData.protein = this.searchedIngredients[value.option.value].protein;
    this.ingredientData.lipid = this.searchedIngredients[value.option.value].lipid;
    this.ingredientData.kcal = this.searchedIngredients[value.option.value].kcal;
    this.ingredientData.carbs = this.searchedIngredients[value.option.value].carbs;
    this.ingredientData.unit = this.searchedIngredients[value.option.value].unit;
    this.ingredientData.quantity = this.searchedIngredients[value.option.value].quantity;
  }

  onCreate() {

    this.ingredientService.addIngredient(this.ingredientData);
  }

  onKeyName(event: any){
    this.ingredientData.name = event.target.value;
  }

  onKeyProt(event: any){
    this.ingredientData.protein = event.target.value;
  }

  onKeyLipid(event: any){
    this.ingredientData.lipid = event.target.value;
  }

  onKeyKcal(event: any){
    this.ingredientData.kcal = event.target.value;
  }

  onKeyCarbs(event: any){
    this.ingredientData.carbs = event.target.value;
  }

  onKeyUnit(event: any){
    this.ingredientData.unit = event.target.value;
  }

  onKeyQty(event: any){
    this.ingredientData.quantity = event.target.value;
  }

  onSave() {
    this.ingredientService.addIngredient(this.ingredientData);
  }

}
