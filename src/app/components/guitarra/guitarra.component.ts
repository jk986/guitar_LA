import { Component, Input, OnInit } from '@angular/core';

import { Guitarra } from 'src/app/models/Guitarra';

@Component({
  selector: 'app-guitarra',
  templateUrl: './guitarra.component.html',
  styleUrls: ['./guitarra.component.css']
})
export class GuitarraComponent implements OnInit {
  //props
  @Input() data:any;
  guitarra:Guitarra;
  //constr
  constructor(){
    this.guitarra = new Guitarra();
  }
  //meths
  ngOnInit(): void {
    this.guitarra = this.data.attributes;
    this.guitarra.imagen = this.guitarra.imagen.data.attributes.formats.medium.url;
  }
}
