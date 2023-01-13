import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./public/public.module')
      .then(m => m.PublicModule), canActivate:[AuthGuard]
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
