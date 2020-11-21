import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs/blogs.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(public blogsService:BlogsService ,public authService:AuthService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  blogs;
  getBlog() {
    this.blogsService.getBlogs().subscribe(transformedBlogs => {
       var blogs=Object(transformedBlogs)["blogs"];
       this.blogs=blogs;
     });;
    // console.log(this.blogs);
  }

  approveBlog(id:string,title:string,body:string,author:string,imagePath:string){
    this.blogsService.approveBlog(id,title,body,author,imagePath,this.authService.getToken());

  }

}
