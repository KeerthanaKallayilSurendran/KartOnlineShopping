import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SignUpService {

  constructor(private http: HttpClient) {}


  connect(values): Observable<any> {
    console.log(values, 12);
    // return this.http.post("http://localhost:3000/signup", values)
    return this.http.post("http://localhost:3000/signup", values)
  }
}
