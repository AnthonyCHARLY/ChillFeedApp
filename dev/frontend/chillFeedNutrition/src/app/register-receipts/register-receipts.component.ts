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

  ingredientList = [];

  filteredOptions;

  formGroup: FormGroup;

  constructor(private router: Router, private ingredientService: IngredientService, private apifood: ApiService, private receipService: ReceipService, private fb: FormBuilder) {
    this.myIngredientsId = [];
    this.myIngredients = []
    this.myIngredientsNames = [];
    this.mySearchedIngredients = [];
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

  onCreate2(){

  }

  onAdd() {
    //this.ingredientList.push({ ...this.ingredientData });
  }
  onCreate(form: NgForm) {

    let sum = {
      protein: 0,
      lipid: 0,
      carbs: 0,
      kcal: 0
    }

    this.ingredientList.forEach(
      a => (
        sum.protein += a.protein,
        sum.carbs += a.carbs,
        sum.lipid += a.lipid,
        sum.kcal += a.kcal
      )
    )
    let receipData = {
      name: form.value.name,
      ingredients: this.ingredientList,
      protein: sum.protein,
      lipid: sum.lipid,
      carbs: sum.carbs,
      kcal: sum.kcal,
    }
    this.receipService.addReceip(receipData).then(() => this.router.navigate(['/recipes']));

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




