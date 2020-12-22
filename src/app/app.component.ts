import { Component, Inject, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './check.css', './tooplate-style.css', 'w3.css']
})

export class AppComponent {

  public isMenuCollapsed = true;
  constructor(public router: Router, @Inject(DOCUMENT) private document: Document, @Inject(LOCALE_ID) protected localeId: string, private translate: TranslateService) {
    translate.setDefaultLang('en');
  }



  useLanguage(language: string) {
    this.translate.use(language);
  }


}
