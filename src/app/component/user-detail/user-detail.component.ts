import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/service/master.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  constructor(
    private service:MasterService,
    private buildr:FormBuilder,
    ){

  }


  ngOnInit(): void {

  }
  customerDetails:any;
  detailsForm = this.buildr.group({
    name: this.buildr.control('')
    name: this.buildr.control('')
    name: this.buildr.control('')
    name: this.buildr.control('')
    })

  
}
