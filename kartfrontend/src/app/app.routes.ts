import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { SigninComponent } from './signin/signin.component'
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { adminSigninComponent } from './admin-signin/adminsignin.component'


export const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: adminSigninComponent,
  }
];


