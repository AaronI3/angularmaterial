import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Model/Customer';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata:any;
  closemessage='closed using directive';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    private ref:MatDialogRef<PopupComponent>,
    private builder:FormBuilder,
    private service:MasterService
    )
    {

  }
  ngOnInit(): void {
    this.inputdata=this.data;
  }

  closePopup(){
    this.ref.close('Closed using function');
  }

  myForm = this.builder.group({
    code:this.builder.control(0),
    name:this.builder.control(''),
    email:this.builder.control(''),
    phone:this.builder.control(''),
    status:this.builder.control(true),
    id:this.builder.control(0)
  
  });

  Saveuser(){
    let v = this.myForm.value;
    let l:Observable<Customer[]> = this.service.GetCustomer();
    let s;
    l.subscribe((customers:Customer[])=>{
      let size = customers.length;
      v.id=size+1;
      v.code=size+1;

      this.service.SaveCustomer(v).subscribe(res=>{
        this.closePopup();
      })
    

    })
  }
}
