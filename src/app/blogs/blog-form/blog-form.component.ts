import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blogs.service';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {

  constructor(public blogsService:BlogsService) { }

  ngOnInit(): void {
    this.blogsService.getBlogs();
  }
  onSubmit(f:NgForm){
    this.blogsService.addBlog(f.value.name,f.value.title,f.value.body)
  }

} 
