/**
 * Rutas del módulo de tareas
 *
 * Esta constante define las rutas del módulo de tareas
 * y los componentes que se encargan de manejar cada ruta
 */
import { Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AccessPermitsGuard } from '../shared/access-permits.guard';
import { TaskComponent } from './task/task.component';

/**
 * Rutas hijas del módulo de tareas
 *
 * Estas rutas se encargan de mostrar el listado de tareas
 * y una tarea en particular
 */
const children: Routes = [
    {
        // Ruta para mostrar el listado de tareas
        path: 'my-tasks',
        component: ListadoComponent,
    },
    {
        // Ruta para crear una tarea nueva
        path: 'task',
        component: TaskComponent,
    },
    {
        // Ruta para mostrar una tarea en particular
        path: 'task/:id',
        component: TaskComponent,
    },
];

/**
 * Ruta principal del módulo de tareas
 *
 * Esta ruta se encarga de cargar el componente principal
 * del módulo de tareas y de proteger la ruta con el guardia
 * AccessPermitsGuard
 */
const routes: Routes = [
    {
        path: 'tasks',
        canActivate: [AccessPermitsGuard],
        loadComponent: () => import('src/app/tasks/tasks.component').then(m => m.TasksComponent),
        children,
    }
]


/**
 * Exporta las rutas del módulo de tareas
 *
 * Esta constante se utiliza en el módulo principal
 * para importar las rutas del módulo de tareas
 */
export { routes as TasksRoutes }

