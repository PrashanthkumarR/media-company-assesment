import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import(`./home/home.module`).then(
      module => module.HomeModule
    )
  },
  { 
    path: 'login', 
    loadChildren: () => import(`./auth/auth.module`).then(
      module => module.AuthModule
    )
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
