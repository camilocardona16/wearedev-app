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

  tasks: Task[] = []

  constructor(
    private _taskSvc: TasksService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.obtenerTareas()
  }

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

  verTarea(tarea?: number) {
    if (tarea)
      this._router.navigate([`/tasks/task/${tarea}`])
    else
      this._router.navigate([`/tasks/task`])
  }

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

  tareaFinalizada(tarea: any) { }

  finishTasks() { }


}
