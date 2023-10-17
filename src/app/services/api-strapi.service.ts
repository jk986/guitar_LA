import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

import { environment } from 'src/environments/environment';
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApiStrapiService {
  //props
  //constru
  constructor(
  ) {
   }
  //meths
  /**
   * Funcion para obtener aun array de guitarras
   * @returns retorna id y atributos de guitarra
   */
  async getGuitars(){
    const respuesta = await fetch(API_URL+'/guitarras?populate=imagen');
    const result = await respuesta.json();
    //console.log(result);
    return result['data'];
  }
  /**
   * Funcion para obtener una sola guitarra
   * @param url url de la guitarra a traer de la api
   * @returns objeto con id y atrubutos de la guitarra elegida
   */
  async getOneGuitar(url:any){
    const respuesta = await fetch(API_URL+`/guitarras?filters[url]=${url}&populate=imagen`);
    const result = await respuesta.json();
    //console.log(result.data);
    //return result.data[0]; // retorna {id,attributes}
    if(result.data.length > 0){
      //console.log('con datos');
      return result.data[0];
    }else{
      // si no se encuentran los datos retorno undifined
      return undefined;
    }
  }
  
}
