import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {
  //props
  
  //meths
  transform(fecha:any): any {
    let nuevaFecha = new Date(fecha);
    return nuevaFecha.toLocaleDateString('es-ES',{year:"numeric",month:"long",day:"2-digit"});
  }

}
