import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: []
})
export class ArticleEditComponent implements OnInit {

  article: Article;
  articleForm: FormGroup;
  isUpdating = false;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('article-id')),
        switchMap(id => this.articleService.getArticle(id))
      ).subscribe(article => {
        this.article = article;
        this.createForm(article);
      });
  }

  createForm(article: Article) {
    this.articleForm = this.formBuilder.group({
      articleId: article.articleId,
      title: article.title,
      category: article.category
    });
  }

  onFormSubmit() {
    this.isUpdating = true;
    this.article.title = this.articleForm.get('title').value;
    this.article.category = this.articleForm.get('category').value;
    this.articleService
      .updateArticle(this.article)
      .subscribe(() =>
        this.router.navigate(['/dashboard/article/list'], {
          relativeTo: this.activatedRoute
        })
      );
  }
}
