import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleComponent } from './article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleService } from 'src/app/services/article.service';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  providers: [ ArticleService ]
})
export class ArticleModule { }
