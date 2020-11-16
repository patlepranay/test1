import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TeamComponent } from './team/team.component';
import { BlogFormComponent } from './blogs/blog-form/blog-form.component';
import { ApprovementComponent } from './approvement/approvement.component';
// import { LoginComponent } from './auth/login/login.component';
// import { AuthGuard } from './auth/auth.guard';




const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'team',component:TeamComponent},
  {path:'request',component:BlogFormComponent},
  {path:'approve',component:ApprovementComponent}
  // { path: "login", component: LoginComponent },
  // { path: "dashboard", component: DashboardComponent ,canActivate: [AuthGuard]}


  
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
