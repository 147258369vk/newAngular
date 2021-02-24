import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  RegisterForm = new FormGroup ({
    username:new FormControl(''),
    email:new FormControl(''),
    contact:new FormControl('')
  });

  getDetails()
  {
    console.log(this.RegisterForm.value);
  }

}
