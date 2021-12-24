import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    let url = "https://api.nutritionix.com/v1_1/search";
    return this.httpClient.get(url);
  }


  getData(search: string, ingredientData :any) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient
          .get<any[]>('https://api.nutritionix.com/v1_1/search/' + search +'?results=0:10&fields=*&appId=c7387d2b&appKey=3b0ac5384668b3cabe3287e1c6cb3c76')
          .subscribe(
            (response: any) => {
              //for (var i = 0; i < response.hits.length; i++) {
                ingredientData.name = response.hits[0].fields.item_name;
                ingredientData.kcal = response.hits[0].fields.nf_calories;
                ingredientData.protein = response.hits[0].fields.nf_protein;
                ingredientData.carbs = response.hits[0].fields.nf_total_carbohydrate;
                ingredientData.lipid = response.hits[0].fields.nf_total_fat;
                console.log(response.hits[0].fields.nf_calories);
             // }             
              resolve(true);
            },
            error => { rejected(true); }
          );
      }
    );
  }
}