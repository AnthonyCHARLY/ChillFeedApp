import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { IngredientService } from 'app/services/ingredient.service';

@Component({
  selector: 'app-register-receipts',
  templateUrl: './register-receipts.component.html',
  styleUrls: ['./register-receipts.component.scss']
})
export class RegisterReceiptsComponent implements OnInit {
  submitSearch:boolean;
  search: string;




  ingredientData = {
    id :'',
    name      : '',
    protein   : 0,
    lipid     : 0,
    carbs     : 0,
    kcal      : 0,
  }

  IngredientSelected :any ;

  ingredientList = [];

  constructor(private ingredientService : IngredientService , private apifood: ApiService) { 
    this.submitSearch = false;
  }

  ngOnInit(): void {
  }
  
  onSearch(form: NgForm) {
    this.search = form.value.name;
    this.ingredientService.FindIngredientByName(this.ingredientData,this.search).then(()=>this.submitSearch = true);

   
  }
  onAdd(){
    this.ingredientList.push(this.ingredientData);
  }
  onCreate(form: NgForm){

  }

}
