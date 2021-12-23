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
  constructor(private apifood: ApiService ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.search = form.value.name;
    console.log("forme "+ this.search);
    this.apifood.getData(this.search).then(()=>{console.log('ouiii')});
  }


}
