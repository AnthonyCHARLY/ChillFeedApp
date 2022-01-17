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

  receipNamesList = [];

  receipsData = {
    receips : [],
  }


  constructor(private apifood: ApiService , private receipService: ReceipService ) { 
   
    
    
  }

  ngOnInit(): void {
    this.receipService.getAllUserReceipsInfo(this);
    
    
    
  }
  onSearch(form: NgForm) {

  }
  onRemoveReceip(receip:any){
   this.receipService.removeReceip(receip._id,this);
    
  }


}
