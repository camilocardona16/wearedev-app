import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AccessPermitsGuard } from '../shared/access-permits.guard';
import { TaskComponent } from './task/task.component';

const children: Routes = [
    {
        path: 'my-tasks',
        component: ListadoComponent,
    },
    {
        path: 'task',
        component: TaskComponent,
    },
    {
        path: 'task/:id',
        component: TaskComponent,
    },
];

const routes: Routes = [
    {
        path: 'tasks',
        // canActivate: [AccessPermitsGuard],
        loadComponent: () => import('src/app/tasks/tasks.component').then(m => m.TasksComponent),
        children
    }
]


export { routes as TasksRoutes }
