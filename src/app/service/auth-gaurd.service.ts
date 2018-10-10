import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from "@angular/router";
import { ServiceService } from "./service.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGaurd implements CanActivate{
      constructor(private authService: ServiceService, public router:Router ){}
    canActivate(route :ActivatedRouteSnapshot,state: RouterStateSnapshot){
      let tocken = localStorage.getItem('isLogin');
      if(tocken){
        return true;
      }
      this.router.navigate(['/login']);
       return false;
    }
}

