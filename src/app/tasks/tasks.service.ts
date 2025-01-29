/**
 * Servicio para manejar las tareas
 *
 * Este servicio se encarga de realizar las operaciones CRUD
 * para las tareas en la API.
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  /**
   * URL base de la API
   * @type {string}
   * @memberof TasksService
   */
  baseUrl = environment.url

  /**
   * Constructor
   *
   * Inicializa el servicio con el cliente HTTP
   * @param {_http: HttpClient} _http Cliente HTTP
   * @memberof TasksService
   */
  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Obtiene una tarea o el listado de tareas
   *
   * Realiza una solicitud GET a la API para obtener una tarea o
   * el listado de tareas
   * @param {number} [id] ID de la tarea a obtener
   * @returns {Observable<any>} Observable con la respuesta de la API
   * @memberof TasksService
   */
  get(id?: number) {
    if (id) return this._http.get(`${this.baseUrl}tasks/${id}/`)
    return this._http.get(`${this.baseUrl}tasks/`)
  }

  /**
   * Crea una tarea
   *
   * Realiza una solicitud POST a la API para crear una tarea
   * @param {any} form Formulario con los datos de la tarea
   * @returns {Observable<any>} Observable con la respuesta de la API
   * @memberof TasksService
   */
  create(form: any) {
    return this._http.post(`${this.baseUrl}tasks/`, form)
  }

  /**
   * Edita una tarea
   *
   * Realiza una solicitud PUT a la API para editar una tarea
   * @param {any} form Formulario con los datos de la tarea
   * @param {number} id ID de la tarea a editar
   * @returns {Observable<any>} Observable con la respuesta de la API
   * @memberof TasksService
   */
  edit(form: any, id: number) {
    return this._http.put(`${this.baseUrl}tasks/${id}/`, form)
  }

  /**
   * Elimina una tarea
   *
   * Realiza una solicitud DELETE a la API para eliminar una tarea
   * @param {number} id ID de la tarea a eliminar
   * @returns {Observable<any>} Observable con la respuesta de la API
   * @memberof TasksService
   */
  delete(id: number) {
    return this._http.delete(`${this.baseUrl}tasks/${id}/`)
  }
}

