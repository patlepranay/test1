import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(public blogsService: BlogsService) { }
  
  blogdata;
  blogs;
  ngOnInit(): void {
    this.blogdata=this.blogsService.getBlogs();
   this.blogs=this.blogdata;
  }
   


  getBlog() {
    this.blogs=this.blogsService.getBlogs();
    console.log(this.blogs);
  }

}
