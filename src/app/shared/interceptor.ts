import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Servicio interceptor para manejar las solicitudes HTTP.
 * 
 * Este servicio agrega el token de autenticación a las cabeceras
 * de cada solicitud HTTP si el token está disponible en el localStorage.
 */
@Injectable()
export class InterceptorService implements HttpInterceptor {
    constructor() { }

    /**
     * Intercepta las solicitudes HTTP para añadir la autenticación.
     * 
     * @param request La solicitud HTTP original.
     * @param next El siguiente manejador en la cadena de interceptores.
     * @returns Un observable de eventos HTTP con la solicitud modificada.
     */
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token');
        const newRequest = request.clone({
            setHeaders: {
                Authorization: `Token ${token}`,
            },
        });
        return next.handle(newRequest);
    }
}
