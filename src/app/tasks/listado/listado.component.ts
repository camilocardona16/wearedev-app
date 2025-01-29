/**
 * Componente para mostrar el listado de tareas
 *
 * Este componente se encarga de obtener el listado de tareas
 * y mostrarlo en una lista. También proporciona métodos para
 * ver y eliminar tareas
 */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TasksService } from '../tasks.service';
import { Router } from '@angular/router';

export interface Task {
  id: number;
  title: string;
  description: string;
  user: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
}


/**
 * Componente para mostrar el listado de tareas
 */
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: ``,
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ListadoComponent implements OnInit {

  /**
   * Arreglo de tareas
   */
  tasks: Task[] = []

  /**
   * Servicio de tareas
   */
  constructor(
    private _taskSvc: TasksService,
    private _router: Router
  ) { }

  /**
   * Inicializa el componente
   *
   * Obtiene el listado de tareas al inicializar el componente
   */
  ngOnInit() {
    this.obtenerTareas()
  }

  /**
   * Obtiene el listado de tareas
   *
   * Realiza una solicitud GET a la API para obtener el listado de tareas
   * y actualiza el arreglo de tareas
   */
  obtenerTareas() {
    this._taskSvc.get().subscribe({
      next: (res: any) => {
        this.tasks = res.results
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  /**
   * Ver tarea
   *
   * Redirige a la ruta de la tarea seleccionada
   * @param tarea ID de la tarea a ver
   */
  verTarea(tarea?: number) {
    if (tarea)
      this._router.navigate([`/tasks/task/${tarea}`])
    else
      this._router.navigate([`/tasks/task`])
  }

  /**
   * Elimina tarea
   *
   * Realiza una solicitud DELETE a la API para eliminar la tarea
   * y actualiza el arreglo de tareas
   * @param tarea ID de la tarea a eliminar
   */
  deleteTarea(tarea: number) {
    this._taskSvc.delete(tarea).subscribe({
      next: (res: any) => {
        this.obtenerTareas()
      },
      error: (err: any) => {
        console.log(err);
      }
    })

  }
}

