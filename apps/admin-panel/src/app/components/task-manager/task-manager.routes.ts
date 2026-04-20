import { Routes } from '@angular/router';

export const TASK_ROUTES: Routes = [
  { path: '', loadComponent: () => import('../task-manager/task-manager.component').then(c => c.TaskManagerComponent) },
  // { path: ':id', loadComponent: () => import('./task-detail/task-detail.component').then(c => c.TaskDetailComponent) }
];