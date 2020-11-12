import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { BlogFormComponent } from './blogs/blog-form/blog-form.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'team',component:TeamComponent},
  {path:'request',component:BlogFormComponent}

  
];

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    GalleryComponent,
    HomeComponent,
    TeamComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
