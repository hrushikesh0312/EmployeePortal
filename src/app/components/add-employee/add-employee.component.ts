import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  user={
    firstName:"Kapil",
    lastName:"Dev"
  };

  onSubmit(userForm:NgForm){
    console.log(userForm.value);
  }
}
