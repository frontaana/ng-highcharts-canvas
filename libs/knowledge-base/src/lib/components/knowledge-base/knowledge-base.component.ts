import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { KnowledgeBaseStore } from '../../store/knowledge-base.store';
import { ArticleCardComponent } from '../article-card/article-card.component';
import { ArticleFilterComponent } from '../article-filter/article-filter.component';
import { ArticleFormComponent } from '../article-form/article-form.component';
import { ArticleListComponent } from '../article-list/article-list.component';

@Component({
  selector: 'lib-knowledge-base',
  standalone: true,
  imports: [
    ArticleCardComponent,
    ArticleFilterComponent,
    ArticleFormComponent,
    ArticleListComponent,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './knowledge-base.component.html',
  styleUrl: './knowledge-base.component.scss',
  providers: [KnowledgeBaseStore],
})
export class KnowledgeBaseComponent {
  readonly store = inject(KnowledgeBaseStore);

  ngOnInit(): void {
    this.store.loadAll();
  }
}
