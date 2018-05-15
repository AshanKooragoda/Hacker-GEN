import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import {UserService} from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NguiAutoCompleteModule} from '@ngui/auto-complete';
import {HttpModule} from '@angular/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddAssignmentComponent } from './components/add-assignment/add-assignment.component';
import { HomeComponent } from './components/home/home.component';
import { ViewUsersComponent } from './components/view-users/view-users.component';
import { PlagarismComponent } from './components/plagarism/plagarism.component';
import { ViewAssignmentComponent } from './components/view-assignment/view-assignment.component';
import { HomePageOfAllComponent } from './components/home-page-of-all/home-page-of-all.component';
import { ViewInputsComponent } from './components/view-inputs/view-inputs.component';
import { MyDetailComponent } from './components/my-detail/my-detail.component';
import { AnswersComponent } from './components/answers/answers.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'hackerGEN', component: HomePageOfAllComponent, children: [
    {path: 'register', component: RegisterComponent},
    {path: 'add_assignment', component: AddAssignmentComponent},
    {path: 'view_assignment', component: ViewAssignmentComponent},
    {path: 'view_users', component: ViewUsersComponent},
    {path: 'view_input', component: ViewInputsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'plagrism', component: PlagarismComponent},
    {path: 'myDetail', component: MyDetailComponent},
    {path: 'answers', component: AnswersComponent}
  ]}
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddAssignmentComponent,
    HomeComponent,
    ViewUsersComponent,
    PlagarismComponent,
    ViewAssignmentComponent,
    HomePageOfAllComponent,
    ViewInputsComponent,
    MyDetailComponent,
    AnswersComponent
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
