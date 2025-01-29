import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ``,
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
})
export class LoginComponent implements OnInit {
  email: string = ""
  password: string = ""

  constructor(
    private router: Router,
    private _loginSvc: LoginService
  ) { }

  ngOnInit() { }

  onSubmit() {
    this._loginSvc.login({ username: this.email, password: this.password }).subscribe({
      next: (res: any) => {
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        this.router.navigate(["/tasks/my-tasks"])
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

}
