import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
/*implementa l'interfaccia CanActivate */
export class AuthGaurdService implements  CanActivate {

  constructor(private router: Router,
    private authService: AuthenticationService) { }
    
    /*specifichiamo che una rotta(navigazione) deve essere attiva solo se 
    l'utente ha effettuato l'accesso.*/
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn())
        return true;
  
      this.router.navigate(['login']);
      return false;
  
    }
}
