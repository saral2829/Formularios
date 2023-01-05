import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface ContactForm
  {
    "name": string,
    "checkAdult": boolean,
    "departament": string,
    "comment": string;
  }
  



@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  model={
  name:  '' ,
  checkAdult: true,
  departament: '' ,
  comment: ''
  }


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm):void{

    console.log('Form value',form )
  }
}
