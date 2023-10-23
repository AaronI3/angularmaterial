import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  inputdata:any;
  closemessage='closed using directive';

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private ref:MatDialogRef<PopupComponent>){

  }
  ngOnInit(): void {
    this.inputdata=this.data;
  }

  closePopup(){
    this.ref.close();
  }
}
