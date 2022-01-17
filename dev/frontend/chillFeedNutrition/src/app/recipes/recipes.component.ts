import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSelectionListChange } from '@angular/material/list';
import { ApiService } from 'app/services/api.service';
import { ReceipService } from 'app/services/receip.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  myRecipesId: string[];
  myRecipes: any[];
  myRecipesNames: any[];
  mySearchedRecipes: any[];

  recipeData = {
    _id: '',
    name: '',
    protein: 0,
    lipid: 0,
    carbs: 0,
    kcal: 0
  }

  


  constructor(private apifood: ApiService , private receipService: ReceipService ) { 
    
    this.myRecipesId = [];
    this.myRecipes = [];
    this.myRecipesNames = [];
    this.mySearchedRecipes = []
    
  }

  ngOnInit(): void {

    this.receipService.getAllUserReceipsInfo(this).then(
      ()=> {
        this.myRecipes = [];

        this.myRecipesId.forEach(id => {
          this.receipService.getRecipeById(id,this).then(
            response =>
            {

              
              
              this.mySearchedRecipes.push(response);
              
              this.myRecipesNames.push(response);

            }
          )
        });
      }
      );

    
    
  }

  onChangeMyRecipes(event: MatSelectionListChange){
    let index = this.myRecipesNames.indexOf(event.option.value);

    this.recipeData._id = this.myRecipes[index]._id;
    this.recipeData.name = this.myRecipes[index].name;
    this.recipeData.kcal = this.myRecipes[index].kcal;
    this.recipeData.protein = this.myRecipes[index].protein;
    this.recipeData.lipid = this.myRecipes[index].lipid;
    this.recipeData.carbs = this.myRecipes[index].carbs;
    
  }

  onKeySearchedRecipes(event: any){
    this.filterData(event.target.value);
  }

  onRemoveRecipe(){

    
    let index = this.myRecipesNames.indexOf(this.recipeData.name);
    let indexSearch = this.mySearchedRecipes.indexOf(this.recipeData.name);
    let indexId = this.myRecipesId.indexOf(this.recipeData._id);

    

    this.receipService.removeReceip(this.recipeData._id).then(
      () => {
        this.myRecipesId.splice(indexId,1);
        this.myRecipesNames.splice(index,1);
        this.myRecipes.splice(index,1);
        this.mySearchedRecipes.splice(indexSearch,1);
        this.recipeData = {
            _id: '',
            name: '',
            protein: 0,
            lipid: 0,
            carbs: 0,
            kcal: 0
        }
      }
    );
    
  }

  filterData(entry: string) {

    this.mySearchedRecipes = [];

    this.myRecipesNames.forEach(rec => {

      let lowEntry = entry.toLowerCase();
      let lowIng = rec.substring(0, entry.length).toLowerCase();

      if (lowEntry === lowIng) {
        this.mySearchedRecipes.push(rec);
      }

    });
  }


}
