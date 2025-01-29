/**
 * Servicio para autenticar al usuario
 *
 * Este servicio se encarga de comunicarse con la API
 * para autenticar al usuario y obtener un token de acceso
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /**
   * URL base de la API
   *
   * La URL base de la API se encuentra en el archivo
   * `src/environments/environment.ts`
   */
  baseUrl = environment.url

  /**
   * Constructor
   *
   * Inicializa el servicio con el cliente HTTP
   * @param _http Cliente HTTP
   */
  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Autenticar al usuario
   *
   * Envía una solicitud POST a la API para autenticar al usuario
   * y obtener un token de acceso
   * @param credentials Credenciales del usuario
   * @returns Observable con la respuesta de la API
   */
  login(credentials: { username: string; password: string }) {
    return this._http.post(`${this.baseUrl}login/`, credentials)
  }
}

