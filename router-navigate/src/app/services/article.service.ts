import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const ARTICLES = [
  new Article(1, 'Core Java Tutorial', 'Java'),
  new Article(2, 'Angular Tutorial', 'Angular'),
  new Article(3, 'Hibernate Tutorial', 'Hibernate')
];

let articlesObservable = of(ARTICLES);

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor() {}

  getArticles(): Observable<Article[]> {
    return articlesObservable;
  }

  getArticle(id: string): Observable<Article> {
    // tslint:disable-next-line: radix
    const idCover = parseInt(id);
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.articleId === idCover))
    );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.getArticles().pipe(map(articles => {
      let articleObj = articles.find(obj => obj.articleId === article.articleId);
      articleObj = article;
      return articleObj;
    }));
  }
}
