import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ArticleCardComponent } from '../article-card/article-card.component';

@Component({
  selector: 'lib-article-list',
  standalone: true,
  imports: [
    ArticleCardComponent,
    CommonModule,
    MatExpansionModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
})
export class ArticleListComponent {
  // @Input({ required: true }) articles: Article[] = [];
}
