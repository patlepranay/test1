import { Component, OnInit } from '@angular/core';
import { BlogsService } from './blogs.service';
import { Subscription } from 'rxjs';
import { Blog } from './blog.model';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  isLoading:boolean=true;
  public isCollapsed = true;

  constructor(public blogsService: BlogsService) { }

  ngOnInit(): void {
    // console.log("hell")
    this.getBlog();
  }

  blogs;

  getBlog() {
    this.blogsService.getBlogs().subscribe(transformedBlogs => {
       var blogs=Object(transformedBlogs)["blogs"];
       this.blogs=blogs.reverse();
     });;
     this.isLoading=false;
    console.log(this.blogs);
  }

}
