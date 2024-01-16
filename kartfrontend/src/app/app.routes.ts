import { Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { SigninComponent } from './signin/signin.component'
import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { adminSigninComponent } from './admin-signin/adminsignin.component'
import { AdminHomeComponent } from './admin-home/adminhome.component';
import { AdminViewUserComponent } from './admin-viewuser/adminviewuser.component';
import { AdminViewProductComponent } from './admin-viewproduct/adminviewproduct.component';
import { AdminAddProductComponent } from './admin-addproduct/adminaddproduct.component';


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
  },
  {
    path: 'adminhome',
    component: AdminHomeComponent,
  },
  {
    path: 'adminviewuser',
    component: AdminViewUserComponent
  },
  {
    path: 'adminviewproduct',
    component: AdminViewProductComponent
  },
  {
    path: 'adminaddproduct',
    component: AdminAddProductComponent
  }
];


