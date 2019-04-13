import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductoComponent } from './components/admin/list-producto/list-producto.component';
import { DetailsProductoComponent } from './components/details-producto/details-producto.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DestacadoComponent } from './components/destacado/destacado.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';

import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';
import { MDBBootstrapModule  } from 'angular-bootstrap-md';
import { ParticlesComponent } from './particles/particles.component';
@NgModule({
  declarations: [
    AppComponent,
    ListProductoComponent,
    DetailsProductoComponent,
    HeroComponent,
    HomeComponent,
    ModalComponent, 
    NavbarComponent,
    DestacadoComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    ParticlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
   
  ], schemas: [NO_ERRORS_SCHEMA],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
