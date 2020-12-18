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

  isLoading: boolean = true;
  public isCollapsed = true;
  pageOfItems: Array<any>;
  r;

  constructor(public blogsService: BlogsService) { }

  ngOnInit(): void {
    // console.log("hell")
    this.getBlog();
  }

  blogs;
  newBlogs = [];
  getBlog() {
    this.blogsService.getBlogs().subscribe(transformedBlogs => {
      var blogs = Object(transformedBlogs)["blogs"];
      this.blogs = blogs.reverse();
      this.blogs.forEach(element => {
        if (element.status === true) {
          this.newBlogs.push(element);
        }


      });
    });;
    this.isLoading = false;
    console.log(this.blogs);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}
