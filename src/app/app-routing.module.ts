import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseContainerComponent } from './course/add-page/add-course-container/add-course-container.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginPageComponent },
  {
    path: 'courses',
    component: MainPageComponent, 
    pathMatch: 'full',
    canActivate: [AuthGuard], 
  },
  { path: 'courses/new', component: AddCourseContainerComponent, canActivate: [AuthGuard] },
  { path: 'courses/:id', component: AddCourseContainerComponent, canActivate: [AuthGuard] },
  { path: '**',  pathMatch: 'full', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
