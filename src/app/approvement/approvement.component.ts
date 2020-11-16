import { Component, OnInit } from '@angular/core';
import { ApprovementService } from './approvement.service';

@Component({
  selector: 'app-approvement',
  templateUrl: './approvement.component.html',
  styleUrls: ['./approvement.component.css']
})
export class ApprovementComponent implements OnInit {

  constructor(public approvementService: ApprovementService) { }
  blogs;
  blogdata;
  ngOnInit(): void {
   this.getBlog;
  }

  getBlog() {
    this.blogs = this.approvementService.getBlogs();
    console.log(this.blogs);
  }

  approveRequest(id:string)
  {
    console.log(id);
  }


}
