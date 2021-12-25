import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { ReceipService } from 'app/services/receip.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  search: string;
  submitSearch:boolean;
  receipNamesList = [];

  receipData = {
    _id   :   '',
    name   :   '',
    ingredients : [] 
  }


  constructor(private apifood: ApiService , private receipService: ReceipService ) { 
    this.receipNamesList.push('Recette tarte aux pommes');
    this.submitSearch=false;
    
  }

  ngOnInit(): void {
    this.receipService.getAllReceipsName(this);
  }
  onSearch(form: NgForm) {
    this.submitSearch=true;
  }


}
