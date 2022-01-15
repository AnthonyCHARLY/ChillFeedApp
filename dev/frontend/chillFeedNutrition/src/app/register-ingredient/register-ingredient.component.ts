import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngredientService } from 'app/services/ingredient.service';
import { ApiService } from 'app/services/api.service';
//autocomplete
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-register-ingredient',
  templateUrl: './register-ingredient.component.html',
  styleUrls: ['./register-ingredient.component.scss']
})
export class RegisterIngredientComponent implements OnInit {
  submitSearch:boolean;
  search: string;

  ingredientData = {
    name      : '',
    protein   : 0,
    lipid     : 0,
    carbs     : 0,
    kcal      : 0,
  }
//autocomplete
  title = 'autocomplete';

  options = ["banan", "chocolate", "apple"];

  filteredOptions;


  formGroup : FormGroup;

  //autocomplete
  constructor(private ingredientService : IngredientService , private apifood: ApiService, private fb : FormBuilder) { 
    this.submitSearch = false;
  }

  ngOnInit(): void {
    //autocomplete
    this.initForm();
    this.getNames();
    
  }
  onCreate(form: NgForm) {
    this.ingredientData.name = form.value.name;
    this.ingredientData.protein = form.value.protein;
    this.ingredientData.lipid = form.value.lipid;
    this.ingredientData.kcal = form.value.kcal;
    this.ingredientData.carbs = form.value.carbs;

    this.ingredientService.addIngredient(this.ingredientData);


    
   
  }
  onSearch(form: NgForm) {
    this.search = form.value.name;
    this.apifood.getData(this.search,this.ingredientData).then(()=>{
      console.log('ouiii')
    });
    this.submitSearch = true;
   
  }
  onSave(){
    this.ingredientService.addIngredient(this.ingredientData);
  }



  //autocomplete
  initForm(){
    this.formGroup = this.fb.group({
      'name' : ['']
    })
    this.formGroup.get('name').valueChanges
    .pipe(debounceTime(500))
    .subscribe(response => {
      console.log('entered data is ', response);
      if(response && response.length){
        this.filterData(response);
      } else {
        this.filteredOptions = [];
      }
      
    })
  }

  filterData(enteredData){
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  getNames(){
   // this.apifood.getDatayaya(this.search).subscribe(response => {
     // this.options = response;
      //console.log('ppepepe  :' +  this.options );
    //})
    this.options= this.apifood.getDataAutocomplete(this.search);
  }

}
