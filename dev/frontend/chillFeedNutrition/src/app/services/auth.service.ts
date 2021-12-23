import{ Injectable} from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private currentUserId: string;
    private isLoged: boolean;


    constructor(private httpClient: HttpClient){

    }



    logIn(userData : object){
        return new Promise((resolve, rejected) => { 
        this.httpClient.post('http://localhost:5000/api/users/log-in',userData)
        .subscribe(
          (data:any) => {
            this.currentUserId = data.msg._id; 
            this.isLoged = true;     
            resolve(true);
            },
          error => {
              rejected(true);
              console.log(error);
              
            }
          );
            
        })
    }
    signIn(userData : object){
        return new Promise((resolve, rejected) => { 
            this.httpClient.post(' http://localhost:5000/api/users/addOne',userData)
            .subscribe(
              (data:any) => {   
                  console.log(data);
                  
                resolve(true);
                },
              error => {
                  console.log(error);
                  
                }
              );
                
            })
    }
}