import{ Injectable} from '@angular/core';
import{ HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService{
    api: any[] = [];
    constructor( private httpClient: HttpClient){

    }
    getDataApi(){
        let url="https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
        return this.httpClient.get(url);
    }

    getData(){
        return new Promise(
            (resolve,rejected) => {
          this.httpClient
            .get<any[]>('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
            .subscribe(
              (response: any) => {
                console.log(response);
                resolve(true);
              },
              error => {rejected(true);}
              );
      
            }
          );

         
    }

}