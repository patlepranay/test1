import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { HomeService } from './home.services';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './check.css', './tooplate-style.css', 'w3.css']
})


export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService) { }


  ngOnInit(): void {
    AOS.init();
  }

  messageRequest(f: NgForm) {
    if (f.valid) {
      this.homeService.sendMessage(f.value.name, f.value.email, f.value.subject, f.value.message);
      f.reset();
    }
  }
}
