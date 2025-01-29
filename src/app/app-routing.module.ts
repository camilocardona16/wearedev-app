import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TasksRoutes } from './tasks/tasks.routes';

/**
 * Rutas de la aplicación
 *
 * Se definen las rutas principales de la aplicación
 */
const routes: Routes = [
  /**
   * Ruta para el login
   */
  {
    path: 'login',
    component: LoginComponent
  },
  /**
   * Rutas para el módulo de tareas
   */
  ...TasksRoutes,
  /**
   * Ruta por defecto, redirige a /login
   */
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

