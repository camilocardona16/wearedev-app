/**
 * Este guardia se encarga de proteger las rutas que requieren autenticacion.
 * Verifica si existe un token de autenticacion en el localStorage, si
 * existe permite el acceso a la ruta, caso contrario redirige al login.
 */
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessPermitsGuard implements CanActivate {

  constructor() { }

  /**
   * Verifica si el usuario tiene permiso para acceder a la ruta.
   * @param route Ruta que se esta intentando acceder.
   * @param state Estado de la ruta.
   * @returns Un observable que resuelve en true o false, o un valor
   * booleano que indica si el usuario tiene permiso para acceder a la ruta.
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return localStorage.getItem('token') ? true : false;
  }
}

