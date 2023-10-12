import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }


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

}
