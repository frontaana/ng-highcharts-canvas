import { Routes } from '@angular/router';

export const taskRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../task-list/task-list.component').then(
        (c) => c.TaskListComponent
      ),
  },
  // { path: ':id', loadComponent: () => import('./task-detail/task-detail.component').then(c => c.TaskDetailComponent) }
];

// const routes: Routes = [
//   {
//     path: 'todo', // или backlog / flow
//     children: [
//       { path: '', component: TaskListComponent }, // Список
//       { path: 'new', component: TaskCreateComponent }, // Создание
//       { path: ':id', component: TaskDetailComponent }, // Просмотр/Редакт
//     ],
//   },
// ];
