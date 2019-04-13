import { HeroComponent } from './components/hero/hero.component';
import { ListProductoComponent } from './components/admin/list-producto/list-producto.component';
import { DetailsProductoComponent } from './components/details-producto/details-producto.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/users/login/login.component';
import { DestacadoComponent } from './components/destacado/destacado.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destacado', component: DestacadoComponent },// Offers
  { path: 'producto/:id', component: DetailsProductoComponent },
  { path: 'hero', component: HeroComponent}, 
  { path: 'admin/list-producto', component: ListProductoComponent },
  { path: 'user/login',  component: LoginComponent},
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
