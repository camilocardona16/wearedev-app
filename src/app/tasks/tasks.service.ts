import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseUrl = environment.url

  constructor(
    private _http: HttpClient
  ) { }

  get() {
    return this._http.get(`${this.baseUrl}tasks/`)
  }
}
