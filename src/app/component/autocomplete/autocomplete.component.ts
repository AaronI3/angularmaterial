import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { colorentity } from 'src/app/Entity/colorentity';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{

  colorArray = ['Red','Green','Blue'];

  filteroptions!:Observable<string[]>;

  formcontrol=new FormControl('');

  //creating an array 
  colorarraylist!:colorentity[];

  filteroptionslist!:Observable<colorentity[]>;
  
  //injecting the service
  constructor(private service:MasterService) {
    this.colorarraylist = this.service.GetColorList();
  }

  ngOnInit(): void {
    // this.filteroptions=this.formcontrol.valueChanges.pipe(
    //   startWith(''),map(value=>this._FILTER(value|| ''))
    // )

    this.filteroptionslist=this.formcontrol.valueChanges.pipe(
      startWith(''),map(value=>this._LISTFILTER(value|| ''))
    )
  }

  private _FILTER(value:string):string[]{
    const searchvalue = value.toLocaleLowerCase();
    return this.colorArray.filter(option=>option.toLocaleLowerCase().includes(searchvalue));
  }

  //the function that creates the filtering in the program.
  //option.name allows filtering by name of color and option.code allows by the code
  private _LISTFILTER(value:string):colorentity[]{
    const searchvalue = value.toLocaleLowerCase();
    return this.colorarraylist.filter(option=>option.name.toLocaleLowerCase().includes(searchvalue) ||
     option.code.toLocaleLowerCase().includes(searchvalue));
  }

}