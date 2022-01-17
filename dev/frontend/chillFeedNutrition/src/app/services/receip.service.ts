import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { identity } from 'rxjs';
import { AuthService } from './auth.service';




@Injectable({
  providedIn: 'root'
})

export class ReceipService {

    constructor( private httpClient : HttpClient, private authService : AuthService){}

    addReceip(receipData : object ){

        return new Promise((resolve, rejected) => {
            let currentUserId = this.authService.getCurentUserId();
           
            this.httpClient.post('http://localhost:5000/api/users/'+currentUserId+'/addReceip', receipData)
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

    getAllReceipsName(register:any ){
      return new Promise((resolve, rejected) => {
          this.httpClient.get('http://localhost:5000/api/receips/getNames')
            .subscribe(
              (rep: any) => {
                register.receipNamesList = rep.data;
                console.log("recipe dans service " +  register.receipNamesList);
                resolve(true);
              },
              error => {
                rejected(true);
                console.log(error);
    
              }
            );
        })
    }

    getRecipeById(id: string, fen: any){
      return new Promise(
        (resolve, rejected) => {
          this.httpClient.get('http://localhost:5000/api/receips/findById/' + id)
            .subscribe(
              (data: any) => {
                fen.myRecipes.push(data.data);
                resolve(data.data.name);
              },
              error => {
                console.log(error);
                rejected(true);
              }
            ); 
        });
    }

    getAllUserReceipsInfo(fen:any ){
      return new Promise((resolve, rejected) => {
        let currentUserId = this.authService.getCurentUserId();
          this.httpClient.get('http://localhost:5000/api/users/'+currentUserId+'/receipsInfos')
            .subscribe(
              (rep: any) => {         
                          
                fen.myRecipesId = rep.data;
                
                resolve(true);
              },
              error => {
                rejected(true);
                console.log(error);
    
              }
            );
        })
    }


    FindReceipByName(receipData : any , name : string ){
      return new Promise((resolve, rejected) => {
          this.httpClient.get('http://localhost:5000/api/receips/findOneByName/'+name)
            .subscribe(
              (rep: any) => {
                receipData._id   =   rep.data._id;
                receipData.name   =   rep.data.name;
                receipData.ingredients   =  rep.data.ingredients ;

                resolve(true);
              },
              error => {
                rejected(true);
                console.log(error);
    
              }
            );
        })
    }
    
    removeReceip(receipId : any){
      return new Promise((resolve, rejected) => {
        let currentUserId = this.authService.getCurentUserId();
          this.httpClient.delete('http://localhost:5000/api/users/'+currentUserId+'/deleteReceip/'+receipId)
            .subscribe(
              (rep: any) => {     
                console.log("rep.data => "+rep.data)                 
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