import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CONSTANTS from "../helpers/app.constants";
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private dashboardBaseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.dashboardBaseUrl = localStorage.getItem(CONSTANTS.DASHBOARD_URL)!;
  }

  createUser(user): Observable<any> {
    return this.http.post(`${this.dashboardBaseUrl}admin/users`, user);
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.dashboardBaseUrl}admin/users`);
  }

  getSingleUser(idUser?: number): Observable<any> {
    let idUserParam: HttpParams;
    if (idUser) {
      idUserParam = new HttpParams().set('idUser', idUser);
    };
    return this.http.get(`${this.dashboardBaseUrl}user/profile`,
      idUserParam! && { params: idUserParam }
    );
  }

  editUserFirstLastName(firstLastName, idUser?: number): Observable<any> {
    let idUserParam: HttpParams;
    if (idUser) {
      idUserParam = new HttpParams().set('idUser', idUser);
    };
    return this.http.put(`${this.dashboardBaseUrl}user/name`,
      firstLastName,
      idUserParam! && { params: idUserParam }
    );
  }

  resetUserPassword(idUser: number): Observable<any> {
    return this.http.put(`${this.dashboardBaseUrl}admin/password/${idUser}`,
      null,
      { responseType: 'text' }
    );
  }

  enableDisableUser(idUser: number): Observable<any> {
    return this.http.put(`${this.dashboardBaseUrl}admin/state/${idUser}`, null);
  }

  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(`${this.dashboardBaseUrl}admin/${idUser}`,
      { responseType: 'text' }
    );
  }

  updateUserImage(payload):Observable<any> {
    return this.http.put(`${this.dashboardBaseUrl}user/photo`, payload);
  }

  editAgency(agency, idUser?: number): Observable<any> {
    let idUserParam: HttpParams;
    if (idUser) {
      idUserParam = new HttpParams().set('idUser', idUser);
    };
    return this.http.post(`${this.dashboardBaseUrl}user/agency`,
      agency,
      idUserParam! && { params: idUserParam }
    );
  }

  updateUserData() { //metodo utilitario x aggiornare dati utenti in sessione nel local storage
    this.getSingleUser().subscribe({
      next: (user: IUser) => {     // dati aggiornati utente in sessione
        localStorage.setItem(CONSTANTS.USER, JSON.stringify(user));
      }
    })
  }

}
