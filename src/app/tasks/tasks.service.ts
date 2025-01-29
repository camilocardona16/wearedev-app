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

  get(id?: number) {
    if (id) return this._http.get(`${this.baseUrl}tasks/${id}/`)
    return this._http.get(`${this.baseUrl}tasks/`)
  }
  create(form: any) {
    return this._http.post(`${this.baseUrl}tasks/`, form)
  }
  edit(form: any, id: number) {
    return this._http.put(`${this.baseUrl}tasks/${id}/`, form)
  }
  delete(id: number) {
    return this._http.delete(`${this.baseUrl}tasks/${id}/`)
  }
}
