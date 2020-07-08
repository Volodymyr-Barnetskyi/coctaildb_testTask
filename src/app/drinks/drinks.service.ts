import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DrinksService {
  categoriesKey: string = `${environment.categoriesApi}`;
  alkoholicKey: string = `${environment.alkoholicApi}`;
  constructor(private http: HttpClient) { }

  CategoryApiRequest(): Observable<any> {
   const encodedUri =  encodeURI(this.categoriesKey);
   return this.http.get(encodedUri).pipe(map((response: any) => response));
  }
    AlcoholicApiRequest(): Observable<any> {
        const encodedUri =  encodeURI(this.alkoholicKey);
        return this.http.get(encodedUri).pipe(map((response: any) => response));
    }
}
