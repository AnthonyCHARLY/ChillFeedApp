import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../services/api.service'

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.scss']
})
export class ClientComponentComponent implements OnInit {

  constructor(private apifood: ApiService) { 
   //this.apifood.getDataApi().subscribe(data=>{
    // console.log(data);
    //})

    this.apifood.getData("tomato").then(()=>{console.log('ouiii')});
    
  }

  ngOnInit(): void {
    
  }

}
