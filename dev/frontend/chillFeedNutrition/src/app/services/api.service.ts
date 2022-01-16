import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//yaya
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api: any[] = [];
  request: {
    appId: "c7387d2b",
    appKey: "3b0ac5384668b3cabe3287e1c6cb3c76	",
    query: "Cookies n Cream"
  };

  constructor(private httpClient: HttpClient) {
    //this.search='tomato';
  }


  getDataApi() {
    let url = "https://api.nutritionix.com/v1_1/";
    return this.httpClient.get(url);
  }
  //autocomplete
  getDataAutocomplete(search : string){
  //  return this.httpClient.get('https://api.nutritionix.com/v1_1/search/' + search +'?results=0:10&fields=*&appId=c7387d2b&appKey=3b0ac5384668b3cabe3287e1c6cb3c76')
    //  .pipe(
      //  map((response:[]) => response.map(item => item['name']))
      //)
      return ['yassir',"hassan","w","estelle"];
  }

  getData(search: string, fen: any){//ingredientData :any, searchedIngredients: any[]) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .get<any[]>('https://api.nutritionix.com/v1_1/search/' + search +'?results=0:50&fields=*&appId=c7387d2b&appKey=3b0ac5384668b3cabe3287e1c6cb3c76')
          .subscribe(
            (response: any) => {
              fen.searchedIngredients = []
              let ingredientData = {
                name: '',
                protein: 0,
                lipid: 0,
                carbs: 0,
                kcal: 0,
                unit: '',
                quantity: 0
            
              }
              console.log(response.hits);
              
              for (var i = 0; i < response.hits.length; i++) {
                ingredientData.name = response.hits[i].fields.item_name;
                ingredientData.kcal = response.hits[i].fields.nf_calories;
                ingredientData.protein = response.hits[i].fields.nf_protein;
                ingredientData.carbs = response.hits[i].fields.nf_total_carbohydrate;
                ingredientData.lipid = response.hits[i].fields.nf_total_fat;
                ingredientData.quantity = response.hits[i].fields.nf_serving_size_qty;
                ingredientData.unit = response.hits[i].fields.nf_serving_size_unit;

                fen.searchedIngredients.push(JSON.parse(JSON.stringify(ingredientData)));
             }             
              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );
  }
}