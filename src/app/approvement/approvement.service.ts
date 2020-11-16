import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { environment } from "../../environments/environment";

const LOCAL_URL = environment.localEnv;
const GLOBAL_URL=environment.globalEnv;

@Injectable({ providedIn: "root" })
export class ApprovementService {
  blogs;
  constructor(private http: HttpClient) { }
  
  getBlogs(): any {
    this.http
      .post(LOCAL_URL + "/blogs","request"
      ).subscribe(transformedBlogs => {
        this.blogs = Object(transformedBlogs)["blogs"]
        //   console.log(this.blogsData);
      });
    return this.blogs;
  }

 
}
