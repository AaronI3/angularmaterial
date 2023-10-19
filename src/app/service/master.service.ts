import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Customer } from '../Model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }


  //a  way to have the code be able to not be hard coded with values. 
  //the program can look at a list and if it has a name and code, it can be used
  GetColorList():colorentity[]{
    return[
      {code:'c1',name:'Red'},
      {code:'c2',name:'Blue'},
      {code:'c3',name:'Green'},
      {code:'c4',name:'Cyan'},
    ]
  }

  GetCustomer():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:3000/customer");
  }

}
