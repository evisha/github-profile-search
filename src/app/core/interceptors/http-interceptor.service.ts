import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, finalize, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // You can modify the request before it is sent
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
      },
    });
    return next.handle(modifiedRequest).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // handle Token error
          }

          if (err.status === 403) {
            // handle Access Denied error
          }

          if (err.status === 500) {
            // handle Server Error
          }
          return throwError(() => new Error('Error: ' + err));
        }
        return throwError(() => new Error('Error: ' + err));
      }),
      finalize(() => {
        // any cleanup or final activities
      })
    );
  }
}
