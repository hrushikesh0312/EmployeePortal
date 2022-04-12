import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-add-employee',
  templateUrl: './reactive-add-employee.component.html',
  styleUrls: ['./reactive-add-employee.component.scss']
})
export class ReactiveAddEmployeeComponent implements OnInit {

  registrationForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z*$]')]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.registrationForm.value)
  }
}
