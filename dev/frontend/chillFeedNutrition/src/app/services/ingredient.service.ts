import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class IngredientService {

    constructor(private httpClient : HttpClient){
    }

    addIngredient(ingredientData : object ){
        return new Promise((resolve, rejected) => {
            this.httpClient.post('http://localhost:5000/api/ingredients/addOne', ingredientData)
              .subscribe(
                (data: any) => {
                  console.log(data);     
                  resolve(true);
                },
                error => {
                  rejected(true);
                  console.log(error);
      
                }
              );
          })

    }

}