import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})

export class IngredientService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  addIngredient(ingredientData: object) {

    return new Promise((resolve, rejected) => {
      let currentUserId = this.authService.getCurentUserId();
      this.httpClient.post('http://localhost:5000/api/users/' + currentUserId + '/addIngredient', ingredientData)
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

  findIngredientByName(ingredientData: any, name: string) {
    return new Promise((resolve, rejected) => {
      this.httpClient.get('http://localhost:5000/api/ingredients/findOneByName/' + name)
        .subscribe(
          (rep: any) => {
            ingredientData._id = rep.data._id;
            ingredientData.name = rep.data.name;
            ingredientData.protein = rep.data.protein;
            ingredientData.lipid = rep.data.lipid;
            ingredientData.carbs = rep.data.carbs;
            ingredientData.kcal = rep.data.kcal;

            resolve(true);
          },
          error => {
            rejected(true);
            console.log(error);

          }
        );
    })
  }

  getIngredientById(id: string, fen: any) {
    return new Promise(
      (resolve, rejected) => {
        this.httpClient.get('http://localhost:5000/api/ingredients/findById/' + id)
          .subscribe(
            (data: any) => {
              fen.myIngredients.push(data.data);
              resolve(data.data.name);
            },
            error => {
              console.log(error);
              rejected(true);
            }
          );
      });
  }

  getAllUserIngredients(fen: any) {
    return new Promise(
      (resolve, rejected) => {
        let currentUserId = this.authService.getCurentUserId();
        this.httpClient.get('http://localhost:5000/api/users/getIngredients/' + currentUserId)
          .subscribe(
            (rep: any) => {

              fen.myIngredientsId = rep.data;
              resolve(true);
            },
            error => {
              console.log(error);
              rejected(true);
            }
          );
      });
  }

  getAllIngredientsName(fen: any) {
    return new Promise((resolve, rejected) => {
      this.httpClient.get('http://localhost:5000/api/ingredients/getNames')
        .subscribe(
          (rep: any) => {

            fen.option = rep.data;
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