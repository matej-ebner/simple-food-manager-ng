import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

import { Dictionary } from "src/app/enums/dictionary.enum";
import { ArticleDTO } from "src/app/interfaces/article-dto.interface";

import { FormsService } from "src/app/services/forms.service";
import { ArticleService } from "src/app/services/article.service";
import { NavigationRoutes } from "src/app/app-navigation-constants";
import { SpinnerService } from "src/app/services/spinner.service";

@Component({
  selector: "sfm-article-form",
  templateUrl: "./article-form.component.html",
  styleUrls: ["./article-form.component.scss"],
})
export class ArticleFormComponent implements OnInit, OnDestroy {
  dictionary = Dictionary;
  navigationRoutes = NavigationRoutes;

  @Input() article?: ArticleDTO;

  articleForm: FormGroup;

  formSuccessMessage: boolean = false;

  saveArticleSubscription: Subscription;

  constructor(
    public formsService: FormsService,
    private spinnerService: SpinnerService,
    private articleService: ArticleService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initArticleForm();
  }

  private initArticleForm(): void {
    let name = this.article ? this.article.name : null;
    let price = this.article ? this.article.price : null;

    this.articleForm = new FormGroup({
      name: new FormControl(name, [
        Validators.required,
        this.formsService.noEmptySpaceValidator,
      ]),
      price: new FormControl(price, [Validators.required]),
    });
  }

  saveArticle() {
    this.spinnerService.showSpinner = true;
    const formData = this.articleForm.value;

    this.saveArticleSubscription = this.articleService
      .saveArticleRequest(formData, this.article?.id)
      .subscribe((response: ArticleDTO) => {
        this.spinnerService.showSpinner = false;
        this.formSuccessMessage = true;

        setTimeout(() => {
          this.router.navigate(["/" + this.navigationRoutes.DASHBOARD]);
        }, 2000);
      });
  }

  ngOnDestroy(): void {
    if (this.saveArticleSubscription) {
      this.saveArticleSubscription.unsubscribe();
    }
  }
}
