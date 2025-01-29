/**
 * Módulo de tareas
 *
 * Este módulo contiene la ruta principal para el módulo de tareas
 * y los componentes para mostrar el listado de tareas y una tarea
 * en particular
 */
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tasks',
  template: `<ion-router-outlet></ion-router-outlet>`,
  styles: ``,
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class TasksComponent {

}

