import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import {UserService} from './services/user.service';
// import {AuthenticationGuard} from './services/authentication.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {HttpModule} from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AssignmentPostComponent } from './components/assignment-post/assignment-post.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'add_assignment', component: AssignmentPostComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'student', component: AdminLoginComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AssignmentPostComponent,
    AdminLoginComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    NguiAutoCompleteModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
