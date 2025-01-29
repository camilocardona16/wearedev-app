import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksRoutes } from './tasks/tasks.routes';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  ...TasksRoutes,
  {
    path: '**',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
