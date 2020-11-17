import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";
import { Blog } from './blog.model';
import { Router } from '@angular/router';

const LOCAL_URL = environment.localEnv;
const GLOBAL_URL=environment.globalEnv;

@Injectable({ providedIn: "root" })
export class BlogsService {
  constructor(private http: HttpClient,private router: Router) { }
  private blogs;
  // private blogsUpdated = new Subject<Blog[]>(); 
  
  getBlogs(): any {
    return this.http
      .post(GLOBAL_URL + "/blogs","request");    
  }

  // getBlogUpdateListener() {
  //   return this.blogsUpdated.asObservable();
  // }

  addBlog(author: string, title: string, body: string) {
    const blog = { id: null, title: title, body: body, author: author };
    this.http
      .post(GLOBAL_URL + "/blogs/request", blog)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  approveBlog(id:string,title:string,body:string,author:string,token:string)
  {
    // console.log(id);console.log(title);console.log(body);console.log(author);
      const updateBlog = { id: id, title: title, body:body,author:author,token:token };
      this.http.put(GLOBAL_URL +"/approve/"+ id, updateBlog)
        .subscribe(response => {
          console.log(response);
          // const updatedPosts = [...this.posts];
          // const oldPostIndex = updatedPosts.findIndex(p => p.id === post.id);
          // updatedPosts[oldPostIndex] = post;
          // this.posts = updatedPosts;
          // this.postsUpdated.next([...this.posts]);
          this.router.navigate(["/"]);
        });
  
  }
}
