import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './signin/auth.guard';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'signin'
  },
  {
     path:'home',component:HomeComponent, canActivate: [AuthGuard]
  },
  {
    path:'signin',component:SigninComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
