import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

/** 3rd party modules */
import { AppNgxBootstrapModule } from './shared/app-ngx-bootstrap/app-ngx-bootstrap.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [

        { path: 'login', component: LoginComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full' },

      ], { useHash: true }),
AppNgxBootstrapModule
  ],
providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
