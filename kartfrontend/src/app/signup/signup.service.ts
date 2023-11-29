import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SignUpService {
  constructor(
    private http: HttpClient
  ) {}

  connect(): Observable<any> {
    return this.http.get("http://localhost:3000/check")
  }
}