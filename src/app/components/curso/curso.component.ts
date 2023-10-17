import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Curso } from 'src/app/models/Curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit, OnChanges{
  @Input() data:any;
  public curso:Curso;
  public style = {}
  constructor(){
    this.curso = new Curso();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //puedo transofromar datos antes de mostrarlos en el DOM

  }
  ngOnInit() {
    this.curso = this.data.attributes;
    this.curso.imagen = this.data.attributes.imagen.data.attributes.url;
    this.style = {
      'background-image': `linear-gradient(to right, rgba(0,0,0,.65), rgba(0,0,0,.7)),url(${this.curso.imagen})`,
      'background-size': 'cover',
      'background-position': 'center center'
    }
    //console.log(this.curso.imagen);

  }
}
