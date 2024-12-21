import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStore } from '@services/auth.store';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authStore = inject(AuthStore);
  const token: string = authStore.selectToken();
  const newReq = req.clone({
    setHeaders: { Authorization: 'Bearer ' + token },
  });
  return next(newReq);
};
