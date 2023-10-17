import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  //props
  @Input() post:any;
  //constr
  constructor(){

  }
  //meths
  
}
