import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  search: string;
  submitSearch:boolean;
  listofIngredients = [];
  constructor(private apifood: ApiService ) { 
    this.listofIngredients.push('Recette tarte aux pommes');
    this.submitSearch=false;
  }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.submitSearch=true;
  }


}
