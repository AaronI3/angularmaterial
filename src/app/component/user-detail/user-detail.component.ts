import { Component, Inject, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
  
  //will be assigned the injected data
  customerDetails:any;

  //will be assigned the data from the database
  display:any;

  //will be assigned the close message
  closemessage='Closed with Function';
  
  constructor(
    //injects the data from the parent component
    @Inject(MAT_DIALOG_DATA) public data:any,

    //injects the service to be used
    private service:MasterService,

    //injects the dialog reference to be used to close the popup
    private ref:MatDialogRef<UserDetailComponent>
    ){

  }

  //closes the popup
  ngOnInit(): void {
    this.customerDetails = this.data;
    if (this.customerDetails.code > 0){
      this.service.GetCustomerByCode(this.customerDetails.code).subscribe(item=>{
        this.display = item;
      })
    }
  }
  


  
}
