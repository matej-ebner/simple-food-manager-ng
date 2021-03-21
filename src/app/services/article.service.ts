import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ArticleDTO } from "../interfaces/article-dto.interface";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticlesRequest(): Observable<ArticleDTO[]> {
    return this.http.get(environment.baseApiUrl + "food") as Observable<ArticleDTO[]>;
  }

  getArticleRequest(articleId:number): Observable<ArticleDTO> {
    return this.http.get(environment.baseApiUrl + "food/" + articleId) as Observable<ArticleDTO>;
  }

  saveArticleRequest(formData:Object,articleId:number): Observable<ArticleDTO> {
    if(articleId){
      return this.http.put(environment.baseApiUrl + "food/"+articleId, formData) as Observable<ArticleDTO>;
    } else {
      return this.http.post(environment.baseApiUrl + "food",formData) as Observable<ArticleDTO>;
    }
  }

  deleteArticleRequest(articleId:number): Observable<ArticleDTO> {
    return this.http.delete(environment.baseApiUrl + "food/"+ articleId) as Observable<ArticleDTO>;
  }

  
}
