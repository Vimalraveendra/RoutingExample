import { inject} from '@angular/core';
import {
  CanActivateFn,
  CanActivateChildFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
 
export const AuthGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | 
   Promise<boolean | UrlTree> | 
   boolean | 
   UrlTree  => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isAuthenticated().then((authenticated) => {
    if (authenticated) {
      return true;
    } else {
      router.navigate(['/']);
      return false;
    }
  });
};
 
export const canActivateChildGuard: CanActivateChildFn = AuthGuard;

