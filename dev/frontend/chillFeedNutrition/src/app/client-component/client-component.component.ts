import { Component, OnInit } from '@angular/core';
import{ ApiService} from '../services/api.service'

@Component({
  selector: 'app-client-component',
  templateUrl: './client-component.component.html',
  styleUrls: ['./client-component.component.scss']
})
export class ClientComponentComponent implements OnInit {
  listClients :[string];
  clientSelected: string;

  constructor(private apifood: ApiService) { 
   this.listClients=[''];    
  }

  ngOnInit(): void {
    this.listClients.push('yassir');
    this.listClients.push('hassan le fou');
  }

  onChange(value){
    this.clientSelected =value;
    console.log(this.clientSelected);
  }

}
