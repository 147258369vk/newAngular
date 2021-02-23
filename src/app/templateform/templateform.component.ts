import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  details=[];
  // name:string='',
  // email:string
  constructor() { }

  ngOnInit(): void {
  }


  getValues(f:NgForm)
  {
    console.log(f.value);

    this.details=f.value;
  }

  getdetails(name:HTMLInputElement,email:HTMLInputElement)
  {
    console.log(name+ " and " +email);
  }
}
