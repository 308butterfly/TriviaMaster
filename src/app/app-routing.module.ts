import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from "./landing/landing.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { QuestionComponent } from "./question/question.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
