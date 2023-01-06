import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pipe-ej1',
  templateUrl: './pipe-ej1.component.html',
  styleUrls: ['./pipe-ej1.component.css']
})
export class PipeEJ1Component implements OnInit {
  name:string="";
  currencyCode:string="";
  inputValue:string='';
  

  constructor() { }

  ngOnInit(): void {
  }

}
