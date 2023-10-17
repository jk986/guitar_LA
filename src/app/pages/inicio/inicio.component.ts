import { Component, OnInit } from '@angular/core';
import { Guitarra } from 'src/app/models/Guitarra';
import { Post } from 'src/app/models/Post';
import { ApiStrapiService } from 'src/app/services/api-strapi.service';
import { CursoService } from 'src/app/services/curso.service';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  public services:any;
  constructor(
    private _guitarraService:ApiStrapiService,
    private _postService:PostsService,
    private _cursoService:CursoService

  ) {
    this.services = {
      gitarras:[],
      posts:[],
      curso:[]
    };
  }
  ngOnInit(){
    
    //this.services['guitarras'] = [...this.services,guitars];
    //this.services = [...this.services,posts];
    this.loadData();
  }

  async loadData(){
    const [guitars,posts,curso] = await Promise.all([
      this._guitarraService.getGuitars(),
      this._postService.getPosts(),
      this._cursoService.getCurso()
    ])

    this.services = {
      guitarras: [...guitars],
      posts: [...posts],
      curso: curso
    };
    //console.log(this.services);
  }

}
