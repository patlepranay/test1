import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs/blogs.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  constructor(public blogsService: BlogsService, public authService: AuthService) { }

  approveBlogs: boolean = false;
  requestBlogs: boolean = false;

  ngOnInit(): void {
    // this.getBlog();
  }
  

  showApprovedBlogs()
  {
    this.requestBlogs=false;
    this.approveBlogs=true;
    this.getBlog();
  }

  showBlogRequest(){
    this.approveBlogs=false;
    this.requestBlogs=true;
    this.getBlog();
  }


  blogs;
  getBlog() {
    this.blogsService.getBlogs().subscribe(transformedBlogs => {
      var blogs = Object(transformedBlogs)["blogs"];
      this.blogs = blogs;
    });;
    // console.log(this.blogs);
  }

  approveBlog(id: string, title: string, body: string, author: string, imagePath: string) {
    this.blogsService.approveBlog(id, title, body, author, imagePath, this.authService.getToken());

  }

  deleteBlog(id:string)
  {
    this.blogsService.deleteBlog(id);
    this.getBlog();
  }

}
