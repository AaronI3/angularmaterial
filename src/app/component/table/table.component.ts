import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  customerList !: Customer[];
  dataSource : any;
  displayedColumns:string[]=['code','name','email','phone','status','action'];



  constructor(private service:MasterService){
    this.service.GetCustomer().subscribe(res=>{
      this.customerList = res;
      this.dataSource= new MatTableDataSource<Customer>(this.customerList);
    });
  }
}