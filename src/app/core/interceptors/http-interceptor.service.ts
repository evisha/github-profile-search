import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpRequest} from "@angular/common/http";
import {catchError, finalize, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService {

  constructor(private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // You can modify the request before it is sent
    const modifiedRequest = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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'
      },
    });
    return next.handle(modifiedRequest).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // handle Token error
            this.router.navigate(['access-denied']);
          }

          if (err.status === 403) {
            // handle Access Denied error
            this.router.navigate(['access-denied']);
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
