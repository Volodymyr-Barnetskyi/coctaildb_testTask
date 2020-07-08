import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  listc: string = `${environment.listc}`;
  constructor(private http: HttpClient) { }

  ListApiRequest(): Observable<any> {
    const encodedUri =  encodeURI(this.listc);
    return this.http.get(encodedUri).pipe(map((response: any) => response));
  }
}
