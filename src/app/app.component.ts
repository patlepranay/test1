import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

import AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './check.css', './tooplate-style.css', 'w3.css']
})

export class AppComponent implements OnInit {

  public isMenuCollapsed = true;
  constructor(public router: Router, @Inject(DOCUMENT) private document: Document, @Inject(LOCALE_ID) protected localeId: string, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    AOS.init();
  }



  useLanguage(language: string) {
    this.translate.use(language);
  }


}
