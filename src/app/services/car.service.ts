import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService{
  //props
  public itemsCar:Array<any>;
  //constr
  constructor() {
    this.itemsCar = new Array();
   }
  //meths
  /**Funcion para añadir elemetos al
   * carrito de compras
   */
  addItemToCar(item:any){
    //iterar sobre los elementos del carrito, para ver si ya existe el objeto
      //retorna true, si almenos uno de los ementos cumple la condicion
    if(this.itemsCar.some(carItem=>carItem.id === item.id)){
      //iterar sobre el array e identificar el elemento duplicado
      const itemsCarUpdated = this.itemsCar.map(carItem =>{
        if(carItem.id === item.id){
          //rescribir cartidad
          carItem.amount = item.amount;
        }
        return carItem;
      });
      //actualizar el carrito
      this.itemsCar = itemsCarUpdated;
      this.saveItems(this.itemsCar);
      console.log('Actializado...',this.itemsCar);
    }else{
      //no hay objetos iguales, entonces too los existentes y se agrega uno nuevo
      this.itemsCar = [...this.getItemsOfCar(),item];
      this.saveItems(this.itemsCar);
      console.log('Add new item...',this.itemsCar);
    }
  }
  
  /**funcion que retorna los items almacenados 
   * en el carrito
   */
  getItemsOfCar(){
    //obtengo datos de localStorage
    let itemsCarLS = JSON.parse(localStorage.getItem('carrito')??'null');
    //evaluo respuesta y asigno valores a mostrar
    let loadData:Array<any>|any = itemsCarLS != null ? itemsCarLS : this.itemsCar;
    //console.log(loadData);
    return loadData;
  }

  saveItems(car:Array<any>){
    localStorage.setItem('carrito',JSON.stringify(car));
  }
}
