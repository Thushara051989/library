import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { BookpageComponent } from './bookpage/bookpage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},{path:'bookpage',component:BookpageComponent},{path:'books',component:BookpageComponent},{path:'addbooks',component:AddbooksComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
