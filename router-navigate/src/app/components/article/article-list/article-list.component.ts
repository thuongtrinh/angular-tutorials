import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: []
})
export class ArticleListComponent implements OnInit {

  articles: Observable<Article[]>;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.articles = this.articleService.getArticles();
  }

  gotoEdit(article: Article) {
    this.router.navigate([article.articleId], {relativeTo: this.activatedRoute});
  }
}
