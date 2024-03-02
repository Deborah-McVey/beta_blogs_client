import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/login/login.component').then((c) => c.LoginComponent)
  },
  {
    path: 'blogs/new',
    loadComponent: () => import('./features/blogs/blogs-new/blogs-new.component').then((c) => c.BlogsNewComponent)
  }
];
