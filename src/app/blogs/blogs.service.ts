import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';



@Injectable({ providedIn: "root" })
export class BlogsService {
  constructor(private http: HttpClient) {}
    blogs;
  getBlogs():any {
    this.http
      .get(
        "http://localhost:3000/blogs"
      ).subscribe(transformedBlogs => {
          this.blogs=Object(transformedBlogs)["blogs"]
        //   console.log(this.blogsData);
      });
      return this.blogs;
  }

  addBlog(author: string, title: string,body:string) {
    const blog  = { id: null, title: title, body: body,author:author };
    this.http
      .post("http://localhost:3000/blogs/request", blog)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
