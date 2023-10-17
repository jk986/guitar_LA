import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  //props
  public posts:any;
  //constr
  constructor(
    private _postsService:PostsService
  ){}
  //meths
  async ngOnInit(){
    this.posts = await this._postsService.getPosts();
    //console.log(this.posts);
  }
}
