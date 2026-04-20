import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./components/task-manager/task-manager.routes').then(m => m.TASK_ROUTES)
  }
];
