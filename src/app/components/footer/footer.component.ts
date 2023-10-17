import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  //props
  public year:any;
  //constr
  constructor(){
    this.year = new Date().getFullYear();
  }
}
