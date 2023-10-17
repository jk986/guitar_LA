import { Component, OnInit, DoCheck } from '@angular/core';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit, DoCheck{
  //props
  public itemsCar:Array<any>;
  public itemsCarLS:any;
  public total:number;

  constructor(
    private _carService:CarService
  ){
    this.itemsCar = new Array();
    this.total = 0;
  }
  ngOnInit(): void {
    /*const guitarSelect = [
      {
      id: 'guitar-test',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxuo5FC1GcmsRNYTp9E1dZLwVWYHN2-xm6DE6f_08BklEwyoQswv19aWTE-rX1XrgGII&usqp=CAU',
      nombre: 'Guitar-Test',
      precio: 650,
      amount: Number(3)
      },
      {
        id: 'guitar-test2',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxuo5FC1GcmsRNYTp9E1dZLwVWYHN2-xm6DE6f_08BklEwyoQswv19aWTE-rX1XrgGII&usqp=CAU',
        nombre: 'Guitar-Test-2',
        precio: 700,
        amount: Number(2)
      }
    ]*/
    //traer items
    this.itemsCar = this._carService.getItemsOfCar();
    //this.itemsCar = guitarSelect;//-test --comentar--
    //this.total = this.calculateTotal(this.itemsCar);
  }
  ngDoCheck(): void {
    this.total = this.calculateTotal(this.itemsCar);
  }
  /**
   * Función que retorna el total de todos 
   * los productos agregados al carrito de compras.
   * @param car carrito de compras
   * @returns total de todos los productos 
   * del carrito
   */
  calculateTotal(car:Array<any>){
                //(acumulado,valorActual)
    const calculate = car.reduce((total,item)=>total+(item.amount*item.precio),0);
    this._carService.saveItems(car);
    return calculate;
  }
  /**
   * Función que elimina elementos del 
   * carrito de compras, usando su id para identifcarlo
   * @param id id del articulo a aliminar 
   */
  eliminarItem(id:any){
    //itera el array y trae los diferentes al id condicion
    const carItemsUpdated = this.itemsCar.filter(guitar=>guitar.id!==id);
    this.itemsCar = carItemsUpdated;
    console.log('Eliminando...',id);
  }

}
