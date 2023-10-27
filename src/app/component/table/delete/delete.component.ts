import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  code:any = this.data;

  constructor(
    //injects the data from the parent component
    @Inject(MAT_DIALOG_DATA) public data:any,

    //injects the service to be used
    private service:MasterService,

    //injects the dialog reference to be used to close the popup
    // private ref:MatDialogRef<UserDetailComponent>
    
  ){}

  ngOnInit(): void {
    this.code = this.data;
  }

  deleteUser(code:any) {
    console.log(code.code);
    this.service.DeleteCustomer(code.code);
  }


}
