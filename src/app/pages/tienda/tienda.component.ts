import { Component, OnInit } from '@angular/core';

import { ApiStrapiService } from 'src/app/services/api-strapi.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit{
  //props
  public guitarras:any;
  //cnstr
  constructor(
    private _api:ApiStrapiService
  ){

  }
  //meths
  ngOnInit(){
    this.obtenerGuitarras();
  }
  async obtenerGuitarras(){
    this.guitarras = await this._api.getGuitars();
    //console.log(this.guitarras);
  }
}
