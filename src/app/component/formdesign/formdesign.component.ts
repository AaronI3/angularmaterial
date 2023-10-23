import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdesign',
  templateUrl: './formdesign.component.html',
  styleUrls: ['./formdesign.component.css']
})
export class FormdesignComponent {

  countryList=['USA','RUSSIA','CHINA','GREAT BRITIAN']
  termlist=['1001 Days','2234 days','3123 days','4123 days','5123 days']

  constructor(private builder:FormBuilder){

  }

  customerform=this.builder.group({
    name:this.builder.control('',Validators.required),
    email:this.builder.control('',Validators.required),
    phone:this.builder.control('',Validators.required),
    address:this.builder.control('',Validators.required),
    country:this.builder.control('',Validators.required),
    term:this.builder.control('',Validators.compose([Validators.required]) ),
    terms:this.builder.control('',Validators.required ),
    dob:this.builder.control(new Date()),
    gender:this.builder.control('Male'),
    status:this.builder.control(true)
  });

  //what happens when the save button is clicked
  SaveCustomer(){
    console.log(this.customerform.value);
  }

  clearForm(){
    this.customerform.reset();
  }

}
