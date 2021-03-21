import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { LoginDTO } from "../interfaces/login-dto.interface";

import { UserDTO } from "../interfaces/user-dto.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  user: UserDTO;

  constructor(private http: HttpClient) {}

  loginRequest(formData: Object): Observable<LoginDTO> {
    return this.http.post(environment.baseApiUrl + "auth/local", formData).pipe(
      map((response: LoginDTO) => {
        this.user = response.user;
        localStorage.setItem("simple-food-manager-token", response.jwt);
        return response;
      })
    );
  }
}
