import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor() { }
  
  async getCurso(){
    const resp = await fetch(API_URL+'/curso?populate=imagen');
    const result = await resp.json();
    return result.data;
  }

}
