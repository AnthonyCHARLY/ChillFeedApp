import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-receipts',
  templateUrl: './register-receipts.component.html',
  styleUrls: ['./register-receipts.component.scss']
})
export class RegisterReceiptsComponent implements OnInit {
  namerIngredient: string;
  //addIngredient: string;
  addIngredient= [];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.namerIngredient= form.value.search;
    
   
  }
  onSubmit2(form: NgForm){
    

    
  }
  onSubmit3(form: NgForm){
   this.addIngredient.push(this.namerIngredient);
    //console.log("sub" +  this.addIngredient );
  }
  

}
