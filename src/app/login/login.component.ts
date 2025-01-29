/**
 * Componente para el login
 *
 * Este componente se encarga de manejar el formulario de login
 * y de autenticar al usuario
 */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    /**
     * Estilos del componente
     */
  ],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginComponent implements OnInit {
  /**
   * Correo electrónico del usuario
   */
  email: string = "";
  /**
   * Contraseña del usuario
   */
  password: string = "";
  /**
   * Servicio para autenticar al usuario
   */
  constructor(
    private router: Router,
    private _loginSvc: LoginService
  ) { }

  /**
   * Inicializa el componente
   */
  ngOnInit() { }

  /**
   * Envía el formulario de login
   */
  onSubmit() {
    this._loginSvc.login({ username: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.user));
        this.router.navigate(["/tasks/my-tasks"]);
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

}


