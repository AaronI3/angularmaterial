import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  customerList !: Customer[];
  dataSource : any;
  displayedColumns:string[]=['code','name','email','phone','status','action'];
  @ViewChild(MatPaginator) pagination !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  constructor(private service:MasterService,private dialog:MatDialog){
    this.service.GetCustomer().subscribe(res=>{
      this.customerList = res;
      this.dataSource= new MatTableDataSource<Customer>(this.customerList);
      this.dataSource.paginator = this.pagination;
      this.dataSource.sort = this.sort;
    });
  }

  FilterChange(data:Event){
    const value=(data.target as HTMLInputElement).value;
    this.dataSource.filter=value;
  }

  Openpopup(){
    this.dialog.open(PopupComponent,{
      width:'60%'

    })
  }
}