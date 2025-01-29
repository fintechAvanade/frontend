import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const JWTInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('accessToken');
  const router = inject(Router);

  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          localStorage.removeItem('accessToken');
          router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  } else {
    return next(req);
  }
};