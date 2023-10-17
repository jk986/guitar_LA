import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Guitarra } from 'src/app/models/Guitarra';
import { ApiStrapiService } from 'src/app/services/api-strapi.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-guitarra-detail',
  templateUrl: './guitarra-detail.component.html',
  styleUrls: ['./guitarra-detail.component.css']
})
export class GuitarraDetailComponent implements OnInit{
  // props
  public guitar:Guitarra;
  public amount:number;

  // constr
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _api:ApiStrapiService,
    private _carService:CarService
  ){
    this.guitar = new Guitarra();
    this.amount = 0;
  }
  // meths
  ngOnInit(): void {
    this.getGuitar();
  }
  /**
   * Funcion para obtener una guitarra y mostrarla 
   * en el DOM
   */
  async getGuitar(){
    //obtener identificador de la guitarra
    let guitarUrl = this._activatedRoute.snapshot.paramMap.get('url');
    //traer guitarra
    let result = await this._api.getOneGuitar(guitarUrl);
    //console.log(result);
    if(result != undefined){
      //guardar guitarra
      this.guitar = result.attributes;
      this.guitar.imagen = this.guitar.imagen.data.attributes.url;
    }else{
      this._router.navigate(['**']);
      console.log('**NO DATA**')
    }
  }
  /**
   * Funcion para gusrdar la cantidad 
   * de guitarras seleccionadas
   */
  handleSubmit(ev?:any){
    ev.preventDefault();
    //si la cantidad es inválida, hacer return
    if(this.amount<1){
      alert('Debes seleccionar una cantidad válida');
      return;
    }
    const guitarSelect = {
      id: this.guitar.url,
      imagen: this.guitar.imagen,
      nombre: this.guitar.nombre,
      precio: this.guitar.precio,
      amount: Number(this.amount)
    }

    //const guitarSelect = this.guitar;
    //console.log(guitarSelect);
    this._carService.addItemToCar(guitarSelect);
  }

}
