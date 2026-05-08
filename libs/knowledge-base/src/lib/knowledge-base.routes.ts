import { Routes } from '@angular/router';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { KnowledgeBaseComponent } from './components/knowledge-base/knowledge-base.component';

export const knowledgeBaseRoutes: Routes = [
  {
    path: '',
    component: KnowledgeBaseComponent,
    children: [
      // Если в будущем ты захочешь разделить форму и список на разные вкладки/страницы:
      { path: 'add', component: ArticleFormComponent },
      { path: 'list', component: ArticleListComponent },
    ],
  },
];
