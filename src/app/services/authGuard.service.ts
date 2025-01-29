import { CanActivateFn, Router } from '@angular/router';
import {inject} from "@angular/core";
import { AuthService } from './auth.service';

export const AuthGuardService : CanActivateFn = () => {

 let isauthenticated = inject(AuthService).getTokenValue()
 let router = inject(Router)

     if (isauthenticated) {
      return true;
    } else {
      router.navigate(['/Login']);
      return false;
    }
}