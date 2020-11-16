import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { Blog } from './blog.model';

const LOCAL_URL = environment.localEnv;
const GLOBAL_URL=environment.globalEnv;

@Injectable({ providedIn: "root" })
export class BlogsService {
  constructor(private http: HttpClient) { }
  private blogs;
  // private blogsUpdated = new Subject<Blog[]>(); 
  
  getBlogs(): any {
    return this.http
      .post(LOCAL_URL + "/blogs","request");    
  }

  // getBlogUpdateListener() {
  //   return this.blogsUpdated.asObservable();
  // }

  addBlog(author: string, title: string, body: string) {
    const blog = { id: null, title: title, body: body, author: author };
    this.http
      .post(LOCAL_URL + "/blogs/request", blog)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
