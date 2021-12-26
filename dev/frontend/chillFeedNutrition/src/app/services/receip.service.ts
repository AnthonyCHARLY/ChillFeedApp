import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
                resolve(true);
              },
              error => {
                rejected(true);
                console.log(error);
    
              }
            );
        })
    }
    getAllUserReceipsInfo(register:any ){
      return new Promise((resolve, rejected) => {
        let currentUserId = this.authService.getCurentUserId();
          this.httpClient.get('http://localhost:5000/api/users/'+currentUserId+'/receipsInfos')
            .subscribe(
              (rep: any) => {              
                register.receipsData = rep.data;
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

}