import{ Injectable} from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    
    api: any[] = [];
    constructor( private httpClient: HttpClient){
        //this.search='tomato';
    }
    getDataApi(){
        let url="https://www.themealdb.com/api/json/v1/1/search.php?s=tomato";
        return this.httpClient.get(url);
    }

    getData(search:string){
        return new Promise(
            (resolve,rejected) => {
          this.httpClient
            .get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?s='+ search)
            .subscribe(
              (response: any) => {
                console.log(response.meals);
                resolve(true);
              },
              error => {rejected(true);}
              );
      
            }
          );

         
    }

}