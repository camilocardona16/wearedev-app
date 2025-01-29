import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = environment.url

  constructor(
    private _http: HttpClient
  ) { }

  login(credentials: { username: string; password: string }) {
    return this._http.post(`${this.baseUrl}login/`, credentials)
  }
}
