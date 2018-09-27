import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";

//firebase
import { AngularFireModule }  from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";

//components
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PrivadoPageComponent } from './components/privado-page/privado-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

//Servicios
import { ProductService } from "./services/product.service";
import { AuthService } from "./services/auth.service";

//Rutas
import { AppRoutingModule } from "./app-routing-module";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
