import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    //injects the data from the parent component
    // @Inject(MAT_DIALOG_DATA) public data:any,

    //injects the service to be used
    private service:MasterService,

    //injects the dialog reference to be used to close the popup
    // private ref:MatDialogRef<UserDetailComponent>
    
  ){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



  deleteUser(){
    this.service.DeleteCustomer(this.customerDetails.code);
  }

}
