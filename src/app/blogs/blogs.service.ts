import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { Blog } from './blog.model';
import { Router } from '@angular/router';

const LOCAL_URL = environment.localEnv;
const GLOBAL_URL = environment.globalEnv;
const URL = LOCAL_URL;


@Injectable({ providedIn: "root" })
export class BlogsService {
  constructor(private http: HttpClient, private router: Router) { }
  private blogs;

  getBlogs(): any {
    return this.http
      .post(URL + "/blogs", "request");
  }

  addBlog(author: string, title: string, body: string, image: File) {
    // const blog = { id: null, title: title, body: body, author: author };
    const blogData = new FormData();
    blogData.append("title", title);
    blogData.append("body", body);
    blogData.append("author", author);
    blogData.append("image", image, title);
    this.http
      .post(URL + "/blogs/request", blogData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  approveBlog(id: string, title: string, body: string, author: string, imagePath: string, token: string) {
    // console.log(id);console.log(title);console.log(body);console.log(author);
    const updateBlog = { id: id, title: title, body: body, author: author, imagePath: imagePath, token: token };
    this.http.put(URL + "/approve/" + id, updateBlog)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/blogs"]);
      });

  }

  deleteBlog(id: string) {
    this.http
      .delete(URL + "/delete/" + id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(["/blogs"]);
      });
  }
}
