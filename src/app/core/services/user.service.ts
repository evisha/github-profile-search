import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string;

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
      { params: qParam});
  }

  getSingleUser(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${username}`);
  }

  getUserRepos(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${username}/repos`);
  }

  getUserFollowers(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}users/${username}/followers`);
  }

}
