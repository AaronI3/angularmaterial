import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    ){

  }
  ngOnInit(): void {
    this.inputdata=this.data;
  }

  closePopup(){
    this.ref.close();
  }

  myForm = this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    phone:this.builder.control('',Validators.required),
    status:this.builder.control(true,Validators.required),
  });

  Saveuser(){
    console.log(this.myForm.value);
  }
}
