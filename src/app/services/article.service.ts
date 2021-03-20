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
    return this.http.get(environment.baseApiUrl + "food") as Observable<
      ArticleDTO[]
    >;
  }
}
