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
<<<<<<< HEAD
import { MyDetailComponent } from './components/my-detail/my-detail.component';
import { AnswersComponent } from './components/answers/answers.component';
=======
<<<<<<< HEAD
import { AnswerComponent } from './components/answer/answer.component';
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c

const appRoutes: Routes = [
<<<<<<< HEAD
  {path: '', component: LoginComponent},
  {path: 'hackerGEN', component: HomePageOfAllComponent, children: [
=======
  {path: '', component: HomePageOfAllComponent, children: [
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
    {path: 'register', component: RegisterComponent},
    {path: 'add_assignment', component: AddAssignmentComponent},
    {path: 'view_assignment', component: ViewAssignmentComponent},
    {path: 'view_users', component: ViewUsersComponent},
    {path: 'view_input', component: ViewInputsComponent},
<<<<<<< HEAD
    {path: 'home', component: HomeComponent},
    {path: 'plagrism', component: PlagarismComponent},
    {path: 'myDetail', component: MyDetailComponent},
    {path: 'answers', component: AnswersComponent}
  ]}
=======
<<<<<<< HEAD
    {path: 'home', component: HomeComponent},
    {path: 'plagrism', component: PlagarismComponent}
  ]},
  {path: 'answer', component: AnswerComponent},
=======
    {path: 'plagrism', component: PlagarismComponent}
  ]},
  {path: 'login', component: LoginComponent}
  // {path: 'login', component: LoginformComponent},
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
  // {path: 'login/:username', component: LoginformComponent},
  // {path: '**', component: NotfoundComponent}
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
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
<<<<<<< HEAD
    MyDetailComponent,
    AnswersComponent
=======
<<<<<<< HEAD
    AnswerComponent,
=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
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
