import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;
  private httpOptions = {
    headers: new HttpHeaders({
      Authorization: `Bearer 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`,
      'Content-Type': 'application/json',
    }),
  };

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'https://api.github.com/'
  }

  getAllUsers(query: any = ''): Observable<any> {
    // "user_search_url": "https://api.github.com/search/users?q={query}{&page,per_page,sort,order}"
    let qParam!: HttpParams;
    if (query) {
      qParam = new HttpParams().set('q', query);
    }
    return this.http.get<any>(`${this.baseUrl}search/users?q=e`,
      {...this.httpOptions, params: qParam});
  }

  getSingleUser(username?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${username}`);
  }

}
