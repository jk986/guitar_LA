import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostsService } from 'src/app/services/posts.service';
@Component({
  selector: 'app-posts-detail',
  templateUrl: './posts-detail.component.html',
  styleUrls: ['./posts-detail.component.css']
})
export class PostsDetailComponent implements OnInit{
  //props
  public post:Post;
  public urlPost:any;
  public imagePost:any;
  //constr
  constructor(
    private _activatedRoute:ActivatedRoute,
    private _router:Router,
    private _postsService:PostsService

  ){
    this.post = new Post();
  }
  //meths
  async ngOnInit(){
    this.urlPost = this._activatedRoute.snapshot.paramMap.get('url');
    await this.getPost();
    
  }
  async getPost(){
    let result = await this._postsService.getOnePost(this.urlPost);
    if(result != undefined){
      this.post = result.attributes;
      this.post.imagen = this.post.imagen.data.attributes.url;
      //console.log(this.post);
    }else{
      this._router.navigate(['/blog']);
    }
    
  }
}
