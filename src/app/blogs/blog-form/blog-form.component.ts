import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogsService } from '../blogs.service';


@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  submitDone:Boolean=false;
  error:string="Please Enter Valid Field Values";
  constructor(public blogsService:BlogsService) {
  }
  
  ngOnInit(): void {
    
    // console.log("hello");
    this.blogsService.getBlogs();
  }

   
  onSubmit(f:NgForm){
    if(f.valid)
    {
      this.blogsService.addBlog(f.value.name,f.value.title,f.value.body);
      f.reset();
      this.submitDone=true;

    }
    else
    {
      
    }

  }

} 
