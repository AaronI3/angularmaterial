import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';
import { PopupComponent } from '../popup/popup.component';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { DeleteComponent } from './delete/delete.component';

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
    this.LoadCustomer();
  }

  LoadCustomer(){
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

  editCustomer(code:any){
    this.Openpopup(code,'Edit Customer',PopupComponent);
  }

  displayCustomer(code:any){
    this.Openpopup(code,'Customer Details',UserDetailComponent);
  }

  deleteCustomer(code:any){
    console.log(code);
    this.Openpopup(code,'Delete Customer',DeleteComponent);
  }

  addCustomer(){
    this.Openpopup(0,'Add Customer',PopupComponent)
  }

  

  Openpopup(code:any,title:any,component:any){
    var _popup=this.dialog.open(component,{
      width:'40%',
      enterAnimationDuration:'200ms',
      exitAnimationDuration:'200ms',
      data:{
        title:title,
        code:code
      }
    });

    _popup.afterClosed().subscribe(item=>{
      this.LoadCustomer();
      //console.log(item);
    })
  }
}