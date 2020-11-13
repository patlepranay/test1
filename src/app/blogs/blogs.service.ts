import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment"
const BACKEND_URL = environment.apiUrl;
@Injectable({ providedIn: "root" })
export class BlogsService {
  constructor(private http: HttpClient) {}
    blogs;
  getBlogs():any {
    this.http
      .get(BACKEND_URL+"/blogs"
      ).subscribe(transformedBlogs => {
          this.blogs=Object(transformedBlogs)["blogs"]
        //   console.log(this.blogsData);
      });
      return this.blogs;
  }

  addBlog(author: string, title: string,body:string) {
    const blog  = { id: null, title: title, body: body,author:author };
    this.http
      .post(BACKEND_URL+"/blogs/request", blog)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
