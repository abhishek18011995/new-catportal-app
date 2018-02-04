import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

// import { UserService } from './data/user/user.service';
/** 3rd party modules */
import { AppNgxBootstrapModule } from './shared/app-ngx-bootstrap/app-ngx-bootstrap.module';
import { HomeComponent } from './home/home.component';
import { TrainingComponent } from './training/training.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { BatchInfoComponent } from './batch-info/batch-info.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    TrainingComponent,
    AssessmentComponent,
    BatchInfoComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, HttpModule,
    RouterModule.forRoot(
      [

        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },
        { path: 'batchInfo', component: BatchInfoComponent },
        { path: 'training', component: TrainingComponent },
        { path: 'courseDetails/:courseCode', component: CourseDetailsComponent },
        { path: 'assessment', component: AssessmentComponent },
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        // { path: '', redirectTo: 'home', pathMatch: 'full' },

      ], { useHash: true }),
    AppNgxBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
