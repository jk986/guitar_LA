import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  //props
  //constr
  constructor() { }
  //meths
  /**
   * Funcion para obtener todos los posts
   * de la seccion Blog
   * @returns array de posts
   */
  async getPosts(){
    const resp = await fetch(API_URL+'/posts?populate=imagen');
    const result = await resp.json();
    //console.log(result.data);
    return result.data;
  }
  /**
   * Funcion que retorna un solo post
   * de la API
   * @param url url del post a traer
   * @returns post seleccionado
   */
  async getOnePost(url:any){
    const respuesta = await fetch(API_URL+`/posts?filters[url]=${url}&populate=imagen`);
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
