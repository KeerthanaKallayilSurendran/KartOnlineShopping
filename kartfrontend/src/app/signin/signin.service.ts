import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class SiginService {

  constructor(private http: HttpClient) {}

  connect(values): Observable<any> {
    console.log(values, 12)
    return this.http.post("http://localhost:3000/signin", values)
  }
}